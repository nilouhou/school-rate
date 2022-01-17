import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Schools from "./Pages/Schools/Schools";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
				<Switch>
					<Redirect from="/" to="/schools" exact />
					<Route path="/schools" component={Schools} exact />
					{/* <Route path="/schools/:id" component={SchoolsDetails} /> */}
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
