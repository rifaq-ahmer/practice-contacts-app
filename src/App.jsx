import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Edit from "./pages/edit/Edit";
import ViewAll from "./pages/view-all/ViewAll";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/add" component={Add}></Route>
				<Route exact path="/edit" component={Edit}></Route>
				<Route exact path="/view-all" component={ViewAll}></Route>
			</Switch>
		</div>
	);
}

export default App;
