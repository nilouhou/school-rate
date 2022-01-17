import React from "react";
import { Grid } from "@mui/material";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import "./List.scss";

const List = ({ schools }) => {
	return (
		<div className="list">
			<Grid container spacing={3}>
				{schools &&
					schools.map((school, i) => (
						<Grid item xs={12} key={i}>
							<SchoolDetails school={school} />
						</Grid>
					))}
			</Grid>
		</div>
	);
};

export default List;
