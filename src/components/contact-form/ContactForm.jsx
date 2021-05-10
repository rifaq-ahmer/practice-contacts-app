import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";

const ContactForm = (props) => {
	const { onContactSave, contactDataToEdit } = props;
	const [errors, setErrors] = useState({});

	const defaultData = {
		name: "",
		email: "",
		job: "Front-End",
		gender: "Male",
		image: "",
		id: uuidv4(),
	};
	const schema = {
		name: Joi.string().required().label("Name"),
		email: Joi.string().required().label("Email"),
	};

	const validate = ({ name, email }) => {
		const result = Joi.validate({ name, email }, schema, { abortEarly: false });
		if (!result.error) return {};
		const error = {};
		for (let item of result.error.details) {
			error[item.path[0]] = item.message;
		}
		setErrors(error);
		return error;
	};

	const [contact, setContact] = useState(contactDataToEdit || defaultData);

	const handleChange = (evt) => {
		setContact({ ...contact, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = (contact) => {
		const error = validate(contact);
		if (Object.keys(error).length < 1) {
			onContactSave(contact);
		}
	};

	return (
		<div className="background">
			<div className="container">
				<div className="screen">
					<div className="screen-header">
						<div className="screen-header-left">
							<div className="screen-header-button close"></div>
							<div className="screen-header-button maximize"></div>
							<div className="screen-header-button minimize"></div>
						</div>
						<div className="screen-header-right">
							<div className="screen-header-ellipsis"></div>
							<div className="screen-header-ellipsis"></div>
							<div className="screen-header-ellipsis"></div>
						</div>
					</div>
					<div className="screen-body">
						<div className="screen-body-item left">
							<div className="app-title">
								<span>CONTACT</span>
								<span>APP</span>
							</div>
							{/* <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
						</div>
						<div className="screen-body-item">
							<div className="app-form">
								<div className="app-form-group">
									<input
										className="app-form-control"
										placeholder="NAME"
										value={contact.name}
										name="name"
										onChange={handleChange}
									/>
									<p className="err-msg">{errors.name}</p>
								</div>
								<div className="app-form-group">
									<input
										className="app-form-control"
										placeholder="EMAIL"
										value={contact.email}
										onChange={handleChange}
										name="email"
									/>
									<p className="err-msg">{errors.email}</p>
								</div>
								<div className="app-form-group">
									<select
										className="app-form-control"
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
								<div className="app-form-group">
									<select
										className="app-form-control"
										name="gender"
										type="radio"
										value={contact.gender}
										onChange={handleChange}
									>
										<option value="Male">Male</option>
										<option value="Back-End">Female</option>
									</select>
								</div>

								<div className="app-form-group buttons">
									<Link to="/">
										<button className="app-form-button">CANCEL</button>
									</Link>
									<button
										className="app-form-button"
										onClick={() => handleSubmit(contact)}
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
