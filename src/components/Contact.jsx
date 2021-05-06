import React, { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [dropdown, setDropdown] = useState("");
	const [radio, setRadio] = useState("");

	return (
		<>
			<div>
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					name="name"
					placeholder="Enter your full Name "
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					required
				/>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					name="email"
					placeholder="Enter your email-Id "
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
				/>

				<select
					name="dropdown"
					id="dropdown"
					value={dropdown}
					onChange={(e) => {
						setDropdown(e.target.value);
					}}
				>
					<option value="Front-End">Front-End</option>
					<option value="Back-End">Back-End</option>
					<option value="Full-Stack">Full-Stack</option>
				</select>

				<label htmlFor="Male">Male</label>
				<input
					name="Male"
					type="radio"
					checked={radio === "Male"}
					value="Male"
					onChange={(e) => {
						setRadio(e.target.value);
					}}
				/>

				<label htmlFor="Female">female</label>
				<input
					name="Female"
					type="radio"
					checked={radio === "Female"}
					value="Female"
					onChange={(e) => {
						setRadio(e.target.value);
					}}
				/>
			</div>

			<button>Save</button>
		</>
	);
};

export default Contact;
