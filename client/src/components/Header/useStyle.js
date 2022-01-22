import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	search: {
		position: "relative",
		display: "flex",
		gap: "0.5rem",
		width: "100%",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "all",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.35),
		"&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
		padding: theme.spacing(1, 1, 1, 2),

		transition: theme.transitions.create("width"),
		width: "auto",
		[theme.breakpoints.up("md")]: { width: "20ch" },
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		paddingBottom: "1rem",
		[theme.breakpoints.up("md")]: {
			paddingBottom: "0rem",
		},
	},

	box: {
		display: "flex",
		alignItems: "center",
	},
}));
