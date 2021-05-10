import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ContactCard from "../../components/contact-card/ContactCard";
import "./view-all.css";

const ViewAll = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("contacts"));
		setData(userData);
	}, []);
	const deleteFuction = (id) => {
		const afterDelete = data.filter((contact) => contact.id !== id);
		setData(afterDelete);
		localStorage.setItem("contacts", JSON.stringify(afterDelete));
	};
	if (!data.length) {
		return (
			<div>
				<h1>There is no Contacts saved in DataBase</h1>
				<div className="add-btn">
					<Link to="/add">
						<button>Add a Contact </button>
					</Link>
				</div>
			</div>
		);
	} else
		return (
			<div>
				<h1 className="view-title">Contact List</h1>
				<div className="card-wrapper">
					{data?.map((item) => (
						<ContactCard
							contact={item}
							onDelete={deleteFuction}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		);
};

export default ViewAll;
