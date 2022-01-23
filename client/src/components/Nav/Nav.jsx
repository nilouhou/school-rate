import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Logo from "../../assets/logo/logo2.png";
import "../Header/Header.scss";
import useStyle from "../Header/useStyle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Nav = ({ user, handleLogOut }) => {
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
						<Link to="/schools">
							<img src={Logo} alt="logo" className="logo" />
						</Link>
					</div>
				</Box>

				<Box
					className={classes.box}
					sx={{ display: { xs: "none", md: "block" } }}
				>
					{user ? (
						<>
							<Button onClick={handleLogOut}>Logout</Button>
						</>
					) : (
						<Avatar />
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
