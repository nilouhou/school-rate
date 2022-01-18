import React from "react";
import SchoolImg from "../../assets/images/school.jpg";
import "./SchoolDetails.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import Rating from "@mui/material/Rating";

const SchoolDetails = ({ school, selected, refProp }) => {
	const { address, area, category, name, rate } = school;

	if (selected)
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<div className="details">
			<div>
				<img src={SchoolImg} alt="school" className="details__img" />
			</div>
			<div className="detailes__info">
				<p>
					<SchoolIcon color="primary" />
					{name}
				</p>
				<Rating name="read-only" value={rate} readOnly />
				<p>
					<ClassIcon color="primary" />
					{category}
				</p>
				<p>
					<MapsHomeWorkIcon color="primary" />
					{area}
				</p>
				<p>
					<LocationOnIcon color="primary" />
					{address}
				</p>
			</div>
		</div>
	);
};

export default SchoolDetails;
