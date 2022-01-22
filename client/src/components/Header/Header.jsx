import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

import Logo from "../../assets/logo/logo2.png";
import "./Header.scss";
import useStyle from "./useStyle.js";
import { Link } from "react-router-dom";

const Header = ({ text, listen, isListening }) => {
	const classes = useStyle();

	return (
		<AppBar
			position="static"
			className={classes.appbar}
			style={{ background: "#006d92" }}
		>
			<Toolbar
				className={classes.toolbar}
				sx={{ flexDirection: { xs: "column", md: "row" } }}
			>
				<Box className={classes.box} sx={{ flexDirection: "column" }}>
					<Link to="/schools">
						<img src={Logo} alt="logo" className="logo" />
					</Link>
				</Box>
				<Box className={classes.box} sx={{ flexDirection: "column" }}>
					<div className={classes.search}>
						<InputBase
							value={text && text}
							placeholder="Search…"
							className={classes.inputInput}
						/>
						<button id="speech" className="btn" onClick={listen}>
							<MicIcon fontSize="large" />
							<div className={` ${isListening && "pulse-ring"}`}></div>
						</button>
					</div>
				</Box>
				<Box
					className={classes.box}
					sx={{ display: { xs: "none", md: "block" } }}
				>
					<Avatar />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
