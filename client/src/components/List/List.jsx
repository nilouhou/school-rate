import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid } from "@mui/material";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import "./List.scss";

const List = ({ schools, childClicked, loading }) => {
	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		setElRefs((refs) =>
			Array(schools.length)
				.fill()
				.map((_, i) => refs[i] || createRef())
		);
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
							<Grid ref={elRefs[i]} item xs={12} key={i}>
								<SchoolDetails
									school={school}
									selected={childClicked === school.recordid}
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
