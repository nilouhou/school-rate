import React, { useEffect, useState } from "react";
import "./SchoolPage.scss";
import { getData, postData } from "../../helper/utils";

import Rating from "@mui/material/Rating";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentItem from "../../components/CommentItem/CommentItem";
import axios from "axios";

const SchoolPage = (props) => {
	const [school, setSchool] = useState([]);

	useEffect(() => {
		const { id } = props.match.params;
		getData(`schools/${id}`).then((data) => {
			setSchool(data);
		});
	}, []);

	console.log({ school });
	const { address, area, category, name, rate, rank, comments, recordid } =
		school;

	const addComment = (newComment) => {
		console.log(newComment);
		const { id } = props.match.params;
		postData(`schools/${id}/comments`, newComment).then((data) => {
			setSchool([data, ...school]);
		});
	};

	return (
		<div className="school">
			<div className="school__banner"></div>
			<div className="school__name">
				<h1>{name}</h1>
			</div>
			<div className="container">
				Rate from API {rate}
				<Rating
					name="read-only"
					value={rate ? rate : 0}
					readOnly
					size="large"
				/>
				<div className="school__form">
					<h3>{comments !== undefined && comments.length} Comments</h3>

					<CommentForm addComment={addComment} />
				</div>
				<div className="school__comments">
					{comments !== undefined ? (
						<CommentItem comments={comments} />
					) : (
						<p>Loading....</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SchoolPage;
