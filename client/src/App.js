import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Schools from "./Pages/Schools/Schools";

function App() {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<Switch>
				<Redirect from="/" to="/schools" exact />
				<Route path="/schools" component={Schools} exact />
				{/* <Route path="/schools/:id" component={SchoolsDetails} /> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
