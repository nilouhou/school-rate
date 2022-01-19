import React from "react";
import SchoolImg from "../../assets/images/school.jpg";
import "./SchoolDetails.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import Rating from "@mui/material/Rating";
import StarsIcon from "@mui/icons-material/Stars";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const SchoolDetails = ({ school, selected, refProp }) => {
	const { address, area, category, name, rate, rank, recordid } = school;

	if (selected)
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<div className={`details ${selected && "selected"}`}>
			<div className="details__img-wrapper">
				<img src={SchoolImg} alt="school" className="details__img" />
			</div>
			<div className="details__info">
				<p className="details__tag">
					<SchoolIcon color="primary" />
					{name}
				</p>
				<Rating name="read-only" value={rate} readOnly />
				<p className="details__tag">
					<ClassIcon color="primary" />
					{category}
				</p>

				<p className="details__tag">
					<StarsIcon color="primary" />
					Academic Ranking: {rank}/10
				</p>
				<p className="details__tag">
					<MapsHomeWorkIcon color="primary" />
					{area}
				</p>
				<p className="details__tag">
					<LocationOnIcon color="primary" />
					{address}
				</p>
				<Link
					className="details__link"
					to={`/schools/${recordid}`}
					color="primary"
					underline="none"
				>
					More details <ArrowForwardIosIcon fontSize="xsmall" />
				</Link>
			</div>
		</div>
	);
};

export default SchoolDetails;
