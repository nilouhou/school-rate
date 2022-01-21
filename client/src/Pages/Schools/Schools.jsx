import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "../../components/Map/Map";
import List from "../../components/List/List";
import { getData } from "../../helper/utils";
import { useVoice } from "../../hooks/useVoice";
import Header from "../../components/Header/Header";

const Schools = (props) => {
	const [schoolsData, setSchoolsData] = useState([]);
	const [filteredSchool, setFilteredSchool] = useState([]);
	const [childClicked, setChildClicked] = useState(null);
	const [loading, setLoading] = useState(false);

	const [ranking, setRanking] = useState("");
	const [rating, setRating] = useState("");
	const [type, setType] = useState("");
	const [query, setQuery] = useState("");

	const { text, isListening, listen } = useVoice();

	const fetchSchoolsbySearch = (query) => {
		setLoading(true);
		props.history.push({ search: `search=${query}` });
		getData(`schools?search=${query}`).then((data) => {
			setSchoolsData(data);
			setLoading(false);
		});
	};

	useEffect(() => {
		if (text !== "") {
			fetchSchoolsbySearch(text);
		}
	}, [text]);

	const filterRanking = (schoolsData) => {
		return schoolsData.filter((school) => school.rank > ranking);
	};

	const filterRating = (schoolsData) => {
		return schoolsData.filter((school) => school.rate > rating);
	};

	const filterCategory = (schoolsData) => {
		return schoolsData.filter((school) =>
			school.category.toLowerCase().trim().includes(type.toLowerCase().trim())
		);
	};

	useEffect(() => {
		let result = schoolsData;

		result = filterRanking(result);
		result = filterRating(result);
		result = filterCategory(result);
		console.log({ result });

		setFilteredSchool(result);
	}, [ranking, rating, type]);

	useEffect(() => {
		setLoading(true);
		getData("schools").then((data) => {
			setSchoolsData(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<Header text={text} listen={listen} />
			<Grid container spacing={0} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List
						schools={filteredSchool.length ? filteredSchool : schoolsData}
						childClicked={childClicked}
						loading={loading}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
						ranking={ranking}
						setRanking={setRanking}
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						schools={filteredSchool.length ? filteredSchool : schoolsData}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Schools;
