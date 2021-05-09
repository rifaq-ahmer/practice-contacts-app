import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/home/Home";

import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";

const ContactForm = (props) => {
	const { onContactSave, contactDataToEdit } = props;
	const defaultData = {
		name: "",
		email: "",
		job: "Front-End",
		gender: "",
		image: "",
		id: uuidv4(),
	};

	const [contact, setContact] = useState(contactDataToEdit || defaultData);

	const handleChange = (evt) => {
		setContact({ ...contact, [evt.target.name]: evt.target.value });
	};

	return (
		<div class="background">
			<div class="container">
				<div class="screen">
					<div class="screen-header">
						<div class="screen-header-left">
							<div class="screen-header-button close"></div>
							<div class="screen-header-button maximize"></div>
							<div class="screen-header-button minimize"></div>
						</div>
						<div class="screen-header-right">
							<div class="screen-header-ellipsis"></div>
							<div class="screen-header-ellipsis"></div>
							<div class="screen-header-ellipsis"></div>
						</div>
					</div>
					<div class="screen-body">
						<div class="screen-body-item left">
							<div class="app-title">
								<span>CONTACT</span>
								<span>APP</span>
							</div>
							{/* <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
						</div>
						<div class="screen-body-item">
							<div class="app-form">
								<div class="app-form-group">
									<input
										class="app-form-control"
										placeholder="NAME"
										value={contact.name}
										name="name"
										onChange={handleChange}
									/>
								</div>
								<div class="app-form-group">
									<input
										class="app-form-control"
										placeholder="EMAIL"
										value={contact.email}
										onChange={handleChange}
										name="email"
									/>
								</div>
								<div class="app-form-group">
									<select
										class="app-form-control"
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
								<div class="app-form-group">
									<select
										class="app-form-control"
										name="gender"
										type="radio"
										value={contact.gender}
										onChange={handleChange}
									>
										<option value="Male">Male</option>
										<option value="Back-End">Female</option>
									</select>
								</div>

								<div class="app-form-group buttons">
									<Link to="/">
										<button class="app-form-button">CANCEL</button>
									</Link>
									<button
										class="app-form-button"
										onClick={() => onContactSave(contact)}
									>
										SAVE
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
