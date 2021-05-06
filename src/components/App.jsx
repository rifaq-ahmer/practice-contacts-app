import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/contact" component={Contact}></Route>
			</Switch>
		</div>
	);
}

export default App;
