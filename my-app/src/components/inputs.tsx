import React from "react"
import { Input } from "@mui/material"

export function GeneralInputWindow(props: { placeholder: string }) {
	return <Input placeholder={props.placeholder}></Input>
}
