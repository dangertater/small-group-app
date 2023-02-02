import React from "react"
import { Button } from "@mui/material"
import { ValidateUser } from "../YupValidateUser"
import { ReactComponent as GreenMenuButton } from "../images/greenMenuButton.svg"
//TODO: import green lines as the menu button
//general use 'Submit' button
export function SubmitButton(props: { children?: string }) {
	return (
		<Button variant="contained" color="secondary" size="large">
			onclick Submit
		</Button>
	)
}
//three lined menu button
export function NavBarButton(props: { children?: string }) {
	return (
		<Button variant="contained" size="small">
			<div>
				<GreenMenuButton />
			</div>
			{/* <img src="../src/images/greenMenuButton.svg" alt="heck"></img> */}
		</Button>
	)
}
