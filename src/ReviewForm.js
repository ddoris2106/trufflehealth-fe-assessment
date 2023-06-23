import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentFormId, UserForm } from "./recoil_state";

function ReviewForm() {
	const navigate = useNavigate();

	const [formId, setFormId] = useRecoilState(currentFormId);
	const currentForm = useRecoilValue(UserForm(formId));
	const { name, address, hospitalName, serviceDate, billAmount, image } =
		currentForm;

	const [isUploaded, setIsUploaded] = useState(false);

	console.table(image);
	const handleNavigation = (page) => {
		navigate(page);
	};

	const handleSubmit = () => {
		// change current form to null
		setFormId("");
		setIsUploaded(true);
	};

	return (
		<div className="formReview">
			{isUploaded === false ? (
				<>
					<p>{`Name: ${name}`}</p>
					<p>{`Address: ${address}`}</p>
					<p>{`Hospital Name: ${hospitalName}`}</p>
					<p>{`Date of Service: ${serviceDate}`}</p>
					<p>{`Total Bill Amount: ${billAmount}`}</p>
					<img
						className="formImage"
						src={image}
						alt="Image of medical bill"
					/>
					<div className="ReviewbuttonContainer">
						<button onClick={() => handleNavigation("/uploadBill")}>
							Edit
						</button>
						<button onClick={handleSubmit}>Subtmit</button>
					</div>
				</>
			) : (
				<>
					<p>Medical Bill successfully uploaded.</p>
					<button onClick={() => handleNavigation("/")}>
						Go to Home
					</button>
				</>
			)}
		</div>
	);
}

export default ReviewForm;
