import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Schools from "./Pages/Schools/Schools";
import SchoolPage from "./Pages/SchoolPage/SchoolPage";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/App.scss";

const theme = createTheme({
	palette: {
		primary: {
			main: "#5bccf6",
		},
		secondary: {
			main: "#fcde67",
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{/* <Header /> */}
				<Switch>
					<Redirect from="/" to="/schools" exact />
					<Route path="/schools" component={Schools} exact />
					<Route path="/schools/:id" component={SchoolPage} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
