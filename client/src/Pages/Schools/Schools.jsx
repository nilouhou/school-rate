import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "../../components/Map/Map";
import List from "../../components/List/List";
import { getData } from "../../utils";

const Schools = () => {
	const [schoolsData, setPlaces] = useState([]);
	const [childClicked, setChildClicked] = useState(null);
	const [loading, setLoading] = useState(false);

	const [ranking, setRanking] = useState("");
	const [rating, setRating] = useState("");
	const [type, setType] = useState("");

	// useEffect(() => {
	// 	const filteredRanking = schools.filter((school) => school.rank > ranking);
	// 	setRanking(filteredRanking);
	// }, [ranking]);

	useEffect(() => {
		setLoading(true);
		getData().then((data) => {
			setPlaces(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={0} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List
						schools={schoolsData}
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
					<Map schools={schoolsData} setChildClicked={setChildClicked} />
				</Grid>
			</Grid>
		</>
	);
};

export default Schools;
