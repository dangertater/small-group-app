import * as yup from "yup"

export let ValidateUser = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(4).max(12).required(),
})
