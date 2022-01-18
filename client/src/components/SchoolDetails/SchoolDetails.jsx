import React from "react";
import SchoolImg from "../../assets/images/school.jpg";
import "./SchoolDetails.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SchoolDetails = ({ school, selected, refProp }) => {
	const { address, area, category, name } = school;

	if (selected)
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<div className="details">
			<div>
				<img src={SchoolImg} alt="school" className="details__img" />
			</div>
			<div className="detailes__info">
				<p>{name}</p>
				<p>{category}</p>
				<p>{area}</p>
				<p>
					<LocationOnIcon color="primary" />
					{address}
				</p>
			</div>
		</div>
	);
};

export default SchoolDetails;
