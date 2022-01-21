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
import Mic from "../../assets/icons/mic.svg";

const Header = ({ text, listen }) => {
	const classes = useStyle();

	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<AppBar position="static">
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
							<div className="pulse-ring"></div>
						</button>
						{/* <img
						src={Mic}
						alt="microphone"
						onClick={listen}
						className="mic"
						style={{ pointerEvents: "all" }}
					/> */}
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
