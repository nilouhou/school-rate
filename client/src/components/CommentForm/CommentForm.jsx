import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import "./CommentForm.scss";

const CommentForm = () => {
	const labels = {
		1: "Poor",
		2: "Poor+",
		3: "Ok",
		4: "Good",
		5: "Excellent",
	};

	const [userRate, setUserRate] = useState(0);
	const [hover, setHover] = React.useState(-1);
	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);

	const handleChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
		}
		setBtnDisabled(false);
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newFeedback = {
			text,
			userRate,
		};

		console.log(newFeedback);
	};

	return (
		<div className="form-wrapper">
			<div className="form-wrapper__avatar">
				<Avatar
					alt="Cindy Baker"
					src="https://mui.com/static/images/avatar/3.jpg"
				/>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<Box
					sx={{
						width: 200,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Rating
						name="hover-feedback"
						value={userRate}
						onChange={(event, newValue) => {
							setUserRate(newValue);
						}}
						onChangeActive={(event, newHover) => {
							setHover(newHover);
						}}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
						}
					/>
					{userRate !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : userRate]}</Box>
					)}
				</Box>

				<label className="form__label" htmlFor="commentText">
					<textarea
						className="form__textarea"
						name="commentText"
						id="commentText"
						placeholder="What do you think of this school?"
						aria-placeholder="What do you think of this school?"
						onChange={handleChange}
					></textarea>
				</label>
				<button type="submit" disabled={btnDisabled}>
					send
				</button>
			</form>
		</div>
	);
};

export default CommentForm;
