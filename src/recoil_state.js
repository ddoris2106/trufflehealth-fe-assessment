import { atom, atomFamily } from "recoil";

const currentFormId = atom({
	key: "currentFormId",
	default: "",
});

const formFamilyIds = atom({
	key: "formIds",
	default: [],
});

const UserForm = atomFamily({
	key: "userForm",
	default: {
		name: "",
		address: "",
		hospitalName: "",
		serviceDate: "",
		billAmount: 0,
		image: "",
	},
});

export { UserForm, formFamilyIds, currentFormId };
