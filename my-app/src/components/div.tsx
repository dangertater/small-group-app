import { styled } from "@mui/material/styles"

export let Div = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20vh;
`
//div centering elements horizontally
export let HorizontalDiv = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 10px;
`
//styles navbar
export let NavBar = styled("div")`
	background-color: #ef0e77;
	width: 100%;
	height: 7vh;
	display: flex;
	padding-left: 2vw;
`

//Below is TS syntax example
// export function Div(props: {
// 	children: JSX.Element | JSX.Element[]
// 	className: string
// }) {
// 	return <StyledDiv>{}</StyledDiv>
// }
