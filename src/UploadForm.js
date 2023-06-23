import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { currentFormId, UserForm } from "./recoil_state";
import { UserFormCreation } from "./utils/formHandler";

function UploadForm(props) {
	const createForm = UserFormCreation();
	const setCurrentFormId = useSetRecoilState(currentFormId);
	const navigate = useNavigate();

	const formId = useRecoilValue(currentFormId);
	const currentForm = useRecoilValue(UserForm(formId));
	// console.log(formId);

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [hospitalName, setHospitalName] = useState("");
	const [serviceDate, setServiceDate] = useState(new Date());
	const [billAmount, setBillAmount] = useState(0);
	const [image, setImage] = useState("");

	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		// Load data from form if form already exists
		if (formId !== "" || formId !== undefined) {
			// console.log("Loading Data from form");
			setName(currentForm.name);
			setAddress(currentForm.address);
			setHospitalName(currentForm.hospitalName);
			setServiceDate(currentForm.serviceDate);
			setBillAmount(currentForm.billAmount);
			setImage(currentForm.image);
		}
	}, []);

	useEffect(() => {
		// Check if all fields are filled
		if (
			name !== "" &&
			address !== "" &&
			hospitalName !== "" &&
			billAmount !== 0 &&
			image !== ""
		) {
			setFormIsValid(true);
		}
	}, [name, address, hospitalName, billAmount, image]);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const imgUrl = URL.createObjectURL(file);
		setImage(imgUrl);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(image);
		const userFormData = {
			name: name,
			address: address,
			hospitalName: hospitalName,
			serviceDate: serviceDate,
			billAmount: billAmount,
			image: image,
		};

		// console.log("form id");
		// console.log(formId);
		let createdFormId = createForm(userFormData, formId);
		setCurrentFormId(createdFormId);
		navigate("/reviewUploadedBill");
	};

	return (
		<div className="uploadPage">
			<div className="formContainer">
				Upload Medical Bill Information
				<form
					className="form"
					onSubmit={(e) => handleSubmit(e)}
				>
					<label>
						Name:
						<input
							name="name"
							type="text"
							placeholder="Enter your first and last name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						Address:
						<input
							name="address"
							type="text"
							placeholder="Enter your address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</label>
					<label>
						Hospital:
						<input
							name="hospitalName"
							type="text"
							placeholder="Enter the name of the hospital"
							value={hospitalName}
							onChange={(e) => setHospitalName(e.target.value)}
						/>
					</label>
					<label>
						Date of Service:
						<input
							name="serviceDate"
							type="date"
							placeholder="Enter the name of the hospital"
							value={serviceDate}
							onChange={(e) => setServiceDate(e.target.value)}
						/>
					</label>
					<label>
						Total Amount of Bill:
						<input
							name="billAmount"
							type="number"
							placeholder="Enter the name of the hospital"
							value={billAmount}
							onChange={(e) => setBillAmount(e.target.value)}
						/>
					</label>
					<label>
						Picture of Bill:
						<input
							name="image"
							type="file"
							onChange={(e) => handleImageUpload(e)}
						/>
					</label>

					<input
						type="submit"
						value="Review"
						disabled={!formIsValid}
					/>
				</form>
			</div>
		</div>
	);
}

export default UploadForm;
