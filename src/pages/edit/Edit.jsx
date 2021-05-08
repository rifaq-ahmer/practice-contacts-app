import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";

const Edit = (props) => {
	const {
		history,
		location: { state },
	} = props;

	const handleEdit = (updatedContact) => {
		const dataFromStorage = JSON.parse(localStorage.getItem("contacts")) || [];

		const newUser = dataFromStorage.map((item) => {
			if (item.id === updatedContact.id) {
				return updatedContact;
			}
			return item;
		});

		localStorage.setItem("contacts", JSON.stringify(newUser));
		history.push("/view-all");
	};
	return (
		<div>
			<ContactForm onContactSave={handleEdit} contactDataToEdit={state} />
		</div>
	);
};

export default Edit;
