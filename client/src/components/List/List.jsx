import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid } from "@mui/material";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import "./List.scss";

const List = ({ schools, childClicked, loading }) => {
	console.log({ childClicked });
	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		const refs = Array(schools.length)
			.fill()
			.map((_, i) => elRefs[i] || createRef());
		setElRefs(refs);
	}, [schools]);

	return (
		<div className="list">
			{loading ? (
				<div>
					<CircularProgress size="3rem" />
				</div>
			) : (
				<Grid container spacing={3}>
					{schools &&
						schools.map((school, i) => (
							<Grid item xs={12} key={i}>
								<SchoolDetails
									school={school}
									selected={Number(childClicked) === i}
									refProp={elRefs[i]}
								/>
							</Grid>
						))}
				</Grid>
			)}
		</div>
	);
};

export default List;
