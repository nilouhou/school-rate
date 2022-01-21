import React, { useEffect, useState } from "react";
import "./SchoolPage.scss";
import { getData, postData } from "../../helper/utils";

import Rating from "@mui/material/Rating";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentItem from "../../components/CommentItem/CommentItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.primary,
}));

const SchoolPage = (props) => {
	const [school, setSchool] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const { id } = props.match.params;
		getData(`schools/${id}`).then((data) => {
			setSchool(data);
			setComments(data.comments);
		});
	}, []);

	console.log({ school });
	const { address, area, category, name, rate, rank, recordid } = school;

	const addComment = (newComment) => {
		console.log(newComment);
		const { id } = props.match.params;
		postData(`schools/${id}/comments`, newComment).then((data) => {
			setComments([data, ...comments]);
		});
	};

	console.log({ comments });

	let average = Math.ceil(
		comments.reduce((acc, curr) => {
			return acc + curr.rate;
		}, 0) / comments.length
	);

	console.log(average);

	return (
		<div className="school">
			<div className="school__banner"></div>
			<div className="school__name">
				<h1>{name}</h1>
			</div>
			<div className="container">
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={{ xs: 1, sm: 2, md: 4 }}
					justifyContent="center"
					divider={<Divider orientation="vertical" flexItem />}
				>
					<Item>
						<h3>Academy ranking:</h3>
						<h3>{rank}</h3>
					</Item>
					<Item>
						<h3>Average Parents Rate : {average}</h3>
						<h3>
							<Rating
								name="read-only"
								value={average ? average : rate ? rate : 0}
								readOnly
								size="large"
							/>
						</h3>
					</Item>
					<Item>
						<h3>Category:</h3>
						<h3>{category}</h3>
					</Item>
				</Stack>

				<div className="school__review">
					<div className="school__form">
						<CommentForm addComment={addComment} />
					</div>
					<div className="school__comments">
						{comments !== undefined ? (
							<CommentItem
								comments={comments.sort((a, b) => b.timestamp - a.timestamp)}
								average={average}
							/>
						) : (
							<p>Loading....</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchoolPage;
