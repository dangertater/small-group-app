import React from "react"
import "./App.css"
import { Div, HorizontalDiv, NavBar } from "./components/div"
import { SubmitButton, NavBarButton } from "./components/buttons"
import { GeneralInputWindow } from "./components/inputs"

function App() {
	return (
		<>
			<NavBar>
				<NavBarButton></NavBarButton>
			</NavBar>
			<Div className="frontPageInputs">
				<GeneralInputWindow placeholder="Name"></GeneralInputWindow>
				<GeneralInputWindow placeholder="Email"></GeneralInputWindow>
				<GeneralInputWindow placeholder="Password"></GeneralInputWindow>
			</Div>
			<HorizontalDiv>
				<SubmitButton></SubmitButton>
			</HorizontalDiv>
		</>
	)
}

export default App
