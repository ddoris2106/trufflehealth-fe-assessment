import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ListRenderer from "./ListRenderer";
import { formFamilyIds } from "./recoil_state";

function Home() {
	const allForms = useRecoilValue(formFamilyIds);
	// console.log(allForms);

	return (
		<div className="home">
			<h1 className="title">Health Hub</h1>
			<div className="info">
				<div className="homeText">All Uploaded Forms</div>
				<Link to="/uploadBill">
					<button className="homeText">Add New Medical Bill</button>
				</Link>
			</div>
			<div className="allForms">
				{allForms.length > 0 ? (
					<ListRenderer allForms={allForms} />
				) : (
					<p className="homeText">No Uploaded Bills</p>
				)}
			</div>
		</div>
	);
}

export default Home;
