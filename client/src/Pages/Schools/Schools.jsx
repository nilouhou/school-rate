import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const Schools = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					{/* <List places={places} /> */}
				</Grid>
				<Grid item xs={12} md={8}>
					{/* <Map places={places} /> */}
				</Grid>
			</Grid>
		</>
	);
};

export default Schools;
