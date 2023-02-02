//definition file to tell TS what an svg is
//--d.ts = definition.typescript file
//--cannot write actual code here
//--when using a react component in this manner, TS will see that the component is
//----the 'type' defined below

declare module "*.svg" {
	import * as React from "react"

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>

	const src: string
	export default src
}
