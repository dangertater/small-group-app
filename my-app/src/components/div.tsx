import { styled } from "@mui/material/styles"

export let Div = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20vh;
`

export let HorizontalDiv = styled("div")`
	display: flex;
	flex-direction: row;
	justify-items: center;
`

//Below is TS syntax example
// export function Div(props: {
// 	children: JSX.Element | JSX.Element[]
// 	className: string
// }) {
// 	return <StyledDiv>{}</StyledDiv>
// }
