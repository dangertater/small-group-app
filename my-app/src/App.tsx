import React from "react"
import "./App.css"
import { Div, HorizontalDiv } from "./components/div"
import { DefaultButton } from "./components/buttons"

function App() {
	return (
		<>
			<Div className="frontPageInputs">
				<input placeholder="Name"></input>
				<input placeholder="Email"></input>
				<input placeholder="Password"></input>
			</Div>
			<HorizontalDiv>
				<DefaultButton />
			</HorizontalDiv>
		</>
	)
}

export default App
