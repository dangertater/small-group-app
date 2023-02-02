import React from "react"
import { Button } from "@mui/material"
// import { ReactComponent as GreenMenuButton } from "/Users/mikew/Programming/small-group-app/my-app/src/images/greenMenuButton.svg"
//TODO: import green lines as the menu button
//general use 'Submit' button
export function SubmitButton(props: { children?: string }) {
	return (
		<Button variant="contained" color="secondary" size="large">
			Submit
		</Button>
	)
}
//three lined menu button
export function NavBarButton(props: { children?: string }) {
	return (
		<Button variant="contained" size="small">
			{/* <GreenMenuButton></GreenMenuButton> */}
			<img src="../src/images/greenMenuButton.svg" alt="heck"></img>
		</Button>
	)
}
