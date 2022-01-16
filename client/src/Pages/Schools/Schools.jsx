import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "../../components/Map/Map";
import List from "../../components/List/List";
import { getData } from "../../utils";

const Schools = () => {
	const [places, setPlaces] = useState([]);

	useEffect(() => {
		getData().then((data) => {
			console.log(data);
			// setPlaces(data);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={0} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map />
				</Grid>
			</Grid>
		</>
	);
};

export default Schools;
