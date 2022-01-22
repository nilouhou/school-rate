import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Avatar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../../assets/logo/logo2.png";
import "./Header.scss";
import useStyle from "./useStyle.js";

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
					<div>
						<img src={Logo} alt="logo" className="logo" />
					</div>
				</Box>
				<Box className={classes.box} sx={{ flexDirection: "column" }}>
					<div className={classes.search}>
						<InputBase
							value={text && text}
							placeholder="Search…"
							className={classes.inputInput}
						/>
						<button id="speech" className="btn" onClick={listen}>
							<MicIcon />
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
