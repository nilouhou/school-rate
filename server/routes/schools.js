const { Router } = require("express");
const { readFile, writeFile } = require("../utils/helper");
const fs = require("fs");

const schoolRouter = Router();
const FILE_PATH = "./data/schools.json";

//Get all schools
schoolRouter.get("/", (req, res) => {
	let schoolsData = readFile(FILE_PATH);

	return res.status(200).send(schoolsData);
});

//Get a single school by id
schoolRouter.get("/:id", (req, res) => {
	const schools = JSON.parse(fs.readFileSync(FILE_PATH));

	const school = schools.find((school) => school.recordid === req.params.id);
	if (!school) return res.status(404).send("The school is not found");
	res.status(200).json(school);
});

module.exports = schoolRouter;
