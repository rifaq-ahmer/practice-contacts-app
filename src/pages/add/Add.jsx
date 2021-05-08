import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";

const Add = (props) => {
	const { history } = props;
	const addContact = (contactData) => {
		const dataFromStorage = JSON.parse(localStorage.getItem("contacts")) || [];

		localStorage.setItem(
			"contacts",
			JSON.stringify([...dataFromStorage, contactData])
		);
		history.push("/view-all");
	};
	return (
		<div>
			<ContactForm onContactSave={addContact} />
		</div>
	);
};

export default Add;
