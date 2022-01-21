const { Router } = require("express");
const { readFile, writeFile } = require("../utils/helper");
const { v4: uuid } = require("uuid");
const fs = require("fs");

const schoolRouter = Router();
const FILE_PATH = "./data/schools.json";

//Get all schools
schoolRouter.get("/", (req, res) => {
	const schoolsData = readFile(FILE_PATH);

	if (!req.query.search) return res.json(schoolsData);

	const query = req.query.search.toLowerCase();
	const results = schoolsData.filter((school) => {
		if (
			school.name.toLowerCase().includes(query) ||
			school.address.toLowerCase().includes(query) ||
			school.area.toLowerCase().includes(query) ||
			school.category.toLowerCase().includes(query)
		)
			return school;
	});

	res.json(results);
});

//Get a single school by id
schoolRouter.get("/:id", (req, res) => {
	const schools = JSON.parse(fs.readFileSync(FILE_PATH));

	const school = schools.find((school) => school.recordid === req.params.id);
	if (!school) return res.status(404).send("The school is not found");
	res.status(200).json(school);
});

//post comment

schoolRouter.post("/:id/comments", (req, res) => {
	if (!req.body.name || !req.body.comment) {
		return res.status(400).send("Please make sure to include name and comment");
	}

	const newComment = {
		id: uuid(),
		name: req.body.name,
		comment: req.body.comment,
		rate: req.body.rate,
		timestamp: new Date().getTime(),
	};

	const schoolsData = readFile(FILE_PATH);
	const school = schoolsData.find(
		(school) => school.recordid === req.params.id
	);

	if (!school) {
		return res.status(404).send("school not found");
	}
	const updatedSchool = school.comments;
	updatedSchool.push(newComment);
	writeFile(schoolsData, FILE_PATH);

	return res.status(201).json(newComment);
});

module.exports = schoolRouter;
