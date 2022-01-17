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
