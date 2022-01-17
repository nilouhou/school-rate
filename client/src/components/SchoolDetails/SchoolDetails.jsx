import React from "react";
import SchoolImg from "../../assets/images/school.jpg";
import "./SchoolDetails.scss";

const SchoolDetails = ({ school, selected, refProp }) => {
	const {
		fields: { address, geo_local_area, school_category, school_name },
	} = school;

	if (selected)
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<div className="details">
			<div>
				<img src={SchoolImg} alt="school" className="details__img" />
			</div>
			<div className="detailes__info">
				<p>{school_name}</p>
				<p>{school_category}</p>
				<p>{geo_local_area}</p>
				<p>{address}</p>
			</div>
		</div>
	);
};

export default SchoolDetails;
