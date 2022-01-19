import React, { useEffect, useState } from "react";
import "./SchoolPage.scss";
import { getData } from "../../utils";

const SchoolPage = (props) => {
	console.log({ props });
	const [school, setSchool] = useState([]);
	useEffect(() => {
		const { id } = props.match.params;
		getData(`schools/${id}`).then((data) => {
			setSchool(data);
		});
	}, []);

	console.log({ school });

	return (
		<div className="school">
			<div className="school__banner"></div>
			<div className="school__name">
				<h1>{school.name}</h1>
			</div>
		</div>
	);
};

export default SchoolPage;
