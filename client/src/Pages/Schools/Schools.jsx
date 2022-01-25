import React, { useEffect, useState, useCallback } from "react";

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

	const { text, isListening, listen } = useVoice();

	const fetchSchoolsbySearch = useCallback(
		(query) => {
			setLoading(true);
			props.history.push({ search: `search=${query}` });
			getData(`schools?search=${query}`).then((data) => {
				setSchoolsData(data);
				setLoading(false);
			});
		},
		[props.history]
	);

	useEffect(() => {
		if (text !== "") {
			if (text === "clear") {
				props.history.push("/");
			}
			fetchSchoolsbySearch(text);
		}
	}, [text, props.history, fetchSchoolsbySearch]);

	const filterRanking = useCallback(
		(schoolsData) => {
			return schoolsData.filter((school) => school.rank > ranking);
		},
		[ranking]
	);

	const filterRating = useCallback(
		(schoolsData) => {
			return schoolsData.filter((school) => school.rate > rating);
		},
		[rating]
	);

	const filterCategory = useCallback(
		(schoolsData) => {
			return schoolsData.filter((school) =>
				school.category.toLowerCase().trim().includes(type.toLowerCase().trim())
			);
		},
		[type]
	);

	useEffect(() => {
		let result = schoolsData;

		result = filterRanking(result);
		result = filterRating(result);
		result = filterCategory(result);

		setFilteredSchool(result);
	}, [filterCategory, filterRanking, filterRating, schoolsData]);

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
			<Header text={text} listen={listen} isListening={isListening} />
			<Grid container spacing={0} style={{ width: "100%" }}>
				<Grid item xs={12} md={8}>
					<Map
						schools={filteredSchool.length ? filteredSchool : schoolsData}
						setChildClicked={setChildClicked}
					/>
				</Grid>
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
			</Grid>
		</>
	);
};

export default Schools;
