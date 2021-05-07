import React, { useState } from "react";
import { useHistory } from "react-router";

const Contact = () => {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [dropdown, setDropdown] = useState("");
	// const [radio, setRadio] = useState("");
	const [user, setUser] = useState({
		name: "",
		email: "",
		job: "Front-End",
		gender: "",
	});
	let history = useHistory();

	const handleChange = (evt) => {
		setUser({ ...user, [evt.target.name]: evt.target.value });
	};
	const handleClick = () => {
		const oldData = JSON.parse(localStorage.getItem("user")) || [];
		localStorage.setItem("user", JSON.stringify([...oldData, user]));
		history.push("./displaycontact");
	};
	// const [user, setUser] = useState({
	// 	name: name,
	// 	email: email,
	// 	job: dropdown,
	// 	gender: radio,
	// });
	// console.log(user);

	return (
		<>
			<div>
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					name="name"
					placeholder="Enter your full Name "
					value={user.name}
					onChange={handleChange}
					required
				/>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					name="email"
					placeholder="Enter your email-Id "
					value={user.email}
					onChange={handleChange}
					required
				/>

				<select
					name="job"
					id="dropdown"
					value={user.job}
					onChange={handleChange}
				>
					<option value="Front-End">Front-End</option>
					<option value="Back-End">Back-End</option>
					<option value="Full-Stack">Full-Stack</option>
				</select>

				<label htmlFor="Male">Male</label>
				<input
					name="gender"
					type="radio"
					checked={user.gender === "Male"}
					value="Male"
					onChange={handleChange}
				/>

				<label htmlFor="Female">female</label>
				<input
					name="gender"
					type="radio"
					checked={user.gender === "Female"}
					value="Female"
					onChange={handleChange}
				/>
			</div>

			<button onClick={handleClick}>Save</button>
		</>
	);
};

export default Contact;
