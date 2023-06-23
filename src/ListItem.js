import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { currentFormId, UserForm } from "./recoil_state";

function ListItem({ formId }) {
	const formInfo = useRecoilValue(UserForm(formId));
	const { name, hospitalName, serviceDate, billAmount } = formInfo;

	const setFormId = useSetRecoilState(currentFormId);

	const navigate = useNavigate();

	const handleNavigation = () => {
		setFormId(formId);
		navigate("/reviewUploadedBill");
	};
	// console.table(formInfo);
	return (
		<li
			// key={formId}
			className="listItem"
		>
			<div>{`$${billAmount}`}</div>
			<div>{hospitalName}</div>
			<div>{`Patient Name: ${name}`}</div>
			<div>{`Date of Service:${serviceDate}`}</div>
			<button onClick={handleNavigation}>View</button>
		</li>
	);
}

export default ListItem;
