import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to="/contact">Add to Contacts app</Link>
		</div>
	);
};

export default Home;
