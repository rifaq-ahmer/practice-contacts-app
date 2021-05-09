import React from "react";
import { Link } from "react-router-dom";
import "./contact-card.css";

const ContactCard = (props) => {
	const { contact, onDelete } = props;
	const handleDelete = () => {
		onDelete(contact.id);
	};

	return (
		<div className="card">
			<div className="card-container">
				<img className="round" src={contact.image} alt="users" />
				<h2>{contact.name}</h2>
				<h4>
					📩 {contact.email}
					<div className="con-data"> 📌 {contact.job} Developer</div>
					👉🏼 {contact.gender}
				</h4>
				<div>
					<Link
						to={{
							pathname: "/edit",
							state: contact, // your data array of objects
						}}
					>
						<button className="primary">Edit</button>
					</Link>
					<button className="primary ghost" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
