import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./view-all.css";

const ViewAll = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("contacts"));
		setData(userData);
	}, []);
	const handleDelete = (id) => {
		const afterDelete = data.filter((contact) => contact.id !== id);
		setData(afterDelete);
		localStorage.setItem("contacts", JSON.stringify(afterDelete));
	};

	return (
		<div className="display">
			<h1>Contact List</h1>
			{data?.map((item) => {
				return (
					<div className="display-list">
						<p>Name: {item.name}</p>
						<p>Email-Id: {item.email}</p>
						<p>Job: {item.job} Developer</p>
						<p>Gender: {item.gender}</p>

						<Link
							to={{
								pathname: "/edit",
								state: item, // your data array of objects
							}}
						>
							<button className="display-btn">Edit</button>
						</Link>
						<button className="del-btn" onClick={() => handleDelete(item.id)}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default ViewAll;
