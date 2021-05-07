import React, { useState, useEffect } from "react";

const Display = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("user"));
		// console.log(userData);
		setData(userData);
	}, []);

	return (
		<div>
			<h1>Contact List</h1>
			{data?.map((item) => {
				return (
					<div>
						<ul>
							<li>{item.name}</li>
							<li>{item.email}</li>
							<li>{item.job}</li>
							<li>{item.gender}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Display;
