import React, { useState, useEffect, createRef } from "react";
import {
	CircularProgress,
	Grid,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@mui/material";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import "./List.scss";

const List = ({
	schools,
	childClicked,
	loading,
	type,
	rating,
	ranking,
	setType,
	setRating,
	setRanking,
}) => {
	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		setElRefs((refs) =>
			Array(schools.length)
				.fill()
				.map((_, i) => refs[i] || createRef())
		);
	}, [schools]);

	const handleChange = (event) => {
		setType(event.target.value);
	};

	return (
		<div className="list">
			{loading ? (
				<div>
					<CircularProgress size="3rem" />
				</div>
			) : (
				<>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
						<InputLabel id="type">Category</InputLabel>
						<Select
							labelId="type"
							id="type"
							value={type}
							onChange={handleChange}
							label="Category"
						>
							<MenuItem value="all">All School</MenuItem>
							<MenuItem value="public">Public School</MenuItem>
							<MenuItem value="independent">Independent School</MenuItem>
							<MenuItem value="strongStart">StrongStart BC</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
						<InputLabel id="ranking">Academic Ranking</InputLabel>
						<Select
							id="ranking"
							value={ranking}
							onChange={(e) => setRanking(e.target.value)}
						>
							<MenuItem value="">All</MenuItem>
							<MenuItem value="3">Good+</MenuItem>
							<MenuItem value="6">Average+</MenuItem>
							<MenuItem value="8">Advance+</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
						<InputLabel id="rating">Parents Rating</InputLabel>
						<Select
							id="rating"
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						>
							<MenuItem value="">All</MenuItem>
							<MenuItem value="3">Above 3.0</MenuItem>
							<MenuItem value="6">Aoove 5.0</MenuItem>
							<MenuItem value="8">Above 8.0</MenuItem>
						</Select>
					</FormControl>

					<Grid container spacing={3}>
						{schools &&
							schools.map((school, i) => (
								<Grid ref={elRefs[i]} item xs={12} key={i}>
									<SchoolDetails
										school={school}
										selected={childClicked === school.recordid}
										refProp={elRefs[i]}
									/>
								</Grid>
							))}
					</Grid>
				</>
			)}
		</div>
	);
};

export default List;
