import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	return (
		<div className="card">
			<div className="home-container">
				<h1>Welcome in Contact-App</h1>
				<div>
					<Link to="/add">
						<button>Add a Contact </button>
					</Link>
					<Link to="/view-all">
						<button>View All Contacts</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
