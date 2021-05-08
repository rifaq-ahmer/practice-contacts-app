import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";

const ContactForm = (props) => {
	const { onContactSave, contactDataToEdit } = props;
	const defaultData = {
		name: "",
		email: "",
		job: "Front-End",
		gender: "",
		id: uuidv4(),
	};
	const [contact, setContact] = useState(contactDataToEdit || defaultData);

	const handleChange = (evt) => {
		setContact({ ...contact, [evt.target.name]: evt.target.value });
	};

	return (
		<div className="contact">
			<div>
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					name="name"
					placeholder="Enter your full Name "
					value={contact.name}
					onChange={handleChange}
					required
				/>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					name="email"
					placeholder="Enter your email-Id "
					value={contact.email}
					onChange={handleChange}
					required
				/>
				<div className="input-list">
					<select
						name="job"
						id="dropdown"
						value={contact.job}
						onChange={handleChange}
					>
						<option value="Front-End">Front-End</option>
						<option value="Back-End">Back-End</option>
						<option value="Full-Stack">Full-Stack</option>
					</select>
				</div>
				<div className="input-radio">
					<div>
						<label htmlFor="Male">Male</label>
						<input
							name="gender"
							type="radio"
							checked={contact.gender === "Male"}
							value="Male"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Female">female</label>
						<input
							name="gender"
							type="radio"
							checked={contact.gender === "Female"}
							value="Female"
							onChange={handleChange}
						/>
					</div>
				</div>
				<button className="home-btn" onClick={() => onContactSave(contact)}>
					{/* <button className="home-btn" onClick={onContactSave}> */}
					Save
				</button>
			</div>
		</div>
	);
};

export default ContactForm;
