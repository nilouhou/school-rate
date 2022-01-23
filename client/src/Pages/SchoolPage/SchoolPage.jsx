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
import { Grid, Box } from "@mui/material";
import SchoolAdmissionImg from "../../assets/images/school-admission.jpg";
import NilouQRCodeImg from "../../assets/images/qr-code.jpg";
import Nav from "../../components/Nav/Nav";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Login from "../../components/Login/Login";
import { useFireBase } from "../../hooks/useFireBase";

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.primary,
}));

const SchoolPage = (props) => {
	const {
		user,
		setUser,
		email,
		setEmail,
		password,
		setPassword,
		emailError,
		passwordError,
		hasAccount,
		setHasAccount,
		handleLogin,
		handleSignUp,
		handleLogOut,
	} = useFireBase();

	const [school, setSchool] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const { id } = props.match.params;
		getData(`schools/${id}`).then((data) => {
			setSchool(data);
			setComments(data.comments);
		});
	}, []);

	const { address, category, name, rate, rank } = school;

	const addComment = (newComment) => {
		console.log(newComment);
		const { id } = props.match.params;
		postData(`schools/${id}/comments`, newComment).then((data) => {
			setComments([data, ...comments]);
		});
	};

	let average = Math.ceil(
		comments.reduce((acc, curr) => {
			return acc + curr.rate;
		}, 0) / comments.length
	);

	return (
		<>
			<Nav user={user} handleLogOut={handleLogOut} />
			<div className="school">
				<div className="school__banner"></div>
				<div className="school__name">
					<h1>{name}</h1>
				</div>
				<div className="container">
					<h3>
						<LocationOnOutlinedIcon /> {address}, Vancouver
					</h3>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={{ xs: 1, sm: 2, md: 4 }}
						justifyContent="center"
						divider={<Divider orientation="vertical" flexItem />}
					>
						<Item className="school__item">
							<h3>Academy ranking:</h3>
							<h3>{rank}</h3>
						</Item>
						<Item className="school__item">
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
						<Item className="school__item">
							<h3>Category:</h3>
							<h3>{category}</h3>
						</Item>
					</Stack>
					<Grid container spacing={0} style={{ width: "100%" }}>
						<Grid item xs={12} md={8}>
							<div className="school__review">
								{user ? (
									<div className="school__form">
										<CommentForm addComment={addComment} />
									</div>
								) : (
									<Login
										email={email}
										password={password}
										setEmail={setEmail}
										setPassword={setPassword}
										handleLogin={handleLogin}
										handleSignUp={handleSignUp}
										hasAccount={hasAccount}
										setHasAccount={setHasAccount}
										emailError={emailError}
										passwordError={passwordError}
									/>
								)}

								<div className="school__comments">
									{comments !== undefined ? (
										<CommentItem
											comments={comments.sort(
												(a, b) => b.timestamp - a.timestamp
											)}
											average={average}
										/>
									) : (
										<p>Loading....</p>
									)}
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box
								mt={13.5}
								sx={{
									"& > :not(style)": {
										m: 1,
										mt: 5,
									},
								}}
							>
								<Paper elevation={3}>
									<img
										src={SchoolAdmissionImg}
										alt="School admission"
										className="school__aside-img"
									/>
								</Paper>
								<Paper elevation={3} mt={15}>
									<img
										src={NilouQRCodeImg}
										alt="School admission"
										className="school__aside-img"
									/>
								</Paper>
							</Box>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
};

export default SchoolPage;
