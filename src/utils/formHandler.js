import { useRecoilValue, useRecoilCallback } from "recoil";
import { UserForm, formFamilyIds } from "../recoil_state";

const UserFormCreation = (formInfo, formId) => {
	const savedIds = useRecoilValue(formFamilyIds);

	const createForm = useRecoilCallback(
		({ set }) =>
			(formInfo, formId) => {
				// create unique id
				const id = formId || crypto.randomUUID();

				// Check if id is areadly used
				if (!savedIds.includes(id)) {
					set(formFamilyIds, (prevIds) => [...prevIds, id]);
				}
				set(UserForm(id), { ...formInfo });
				return id;
			},
		[]
	);

	return createForm;
};

export { UserFormCreation };
