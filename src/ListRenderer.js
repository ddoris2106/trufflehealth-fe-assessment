import React from "react";
import ListItem from "./ListItem";

function ListRenderer({ allForms }) {
	return (
		<div>
			<ul className="allFormsList">
				{allForms.map((formId) => (
					<ListItem
						key={formId}
						formId={formId}
					/>
				))}
			</ul>
		</div>
	);
}

export default ListRenderer;
