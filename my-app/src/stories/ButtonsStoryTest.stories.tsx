import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { SubmitButton } from "./ButtonsStoryTest"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "buttons/submit",
	component: SubmitButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof SubmitButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubmitButton> = (args) => (
	<SubmitButton {...args} />
)

// start here,
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	//if you add prop here, it must match props defined on ButtonStoryTest.tsx
}
