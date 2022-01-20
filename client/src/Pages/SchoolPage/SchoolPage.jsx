import React, { useEffect, useState } from "react";
import "./SchoolPage.scss";
import { getData } from "../../utils";

import Rating from "@mui/material/Rating";

const SchoolPage = (props) => {
	const [userRate, setUserRate] = useState(0);
	const [school, setSchool] = useState([]);
	useEffect(() => {
		const { id } = props.match.params;
		getData(`schools/${id}`).then((data) => {
			setSchool(data);
		});
	}, []);

	console.log({ school });
	const { address, area, category, name, rate, rank, recordid } = school;

	return (
		<div className="school">
			<div className="school__banner"></div>
			<div className="school__name">
				<h1>{name}</h1>
			</div>
			{/* <Comments userId="1" /> */}

			<div className="container">
				Rate from API {rate}
				<Rating name="read-only" value={rate ? rate : 0} readOnly />
				<div className="review">
					user rate
					<Rating
						name="simple-controlled"
						value={userRate}
						onChange={(event, newValue) => {
							setUserRate(newValue);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default SchoolPage;
