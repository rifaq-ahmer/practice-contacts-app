import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";

const Add = (props) => {
	let rndNum = Math.floor(Math.random() * 10) + 1;
	let imgUrl = `https://randomuser.me/api/portraits/men/${rndNum}.jpg`;
	const { history } = props;
	const addContact = (contactData) => {
		const dataFromStorage = JSON.parse(localStorage.getItem("contacts")) || [];
		contactData.image = imgUrl;

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
