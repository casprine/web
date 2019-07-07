import SyntaxHighlighter from "react-syntax-highlighter/prism-light";
import { tomorrow } from "react-syntax-highlighter/styles/prism";

const CodeBlockJS = props => {
	const classNames = props.className.split(" ");
	const lang = classNames[0].substring(9);
	return (
		<SyntaxHighlighter
			language={lang}
			customStyle={{
				fontSize: 14,
				background: "#0f111a",
				fontFamily: "ibm-plex",
				borderRadius: "2px"
			}}
			codeTagProps={{
				fontSize: 14
			}}
			style={tomorrow}
		>
			{props.children}
		</SyntaxHighlighter>
	);
};
export default CodeBlockJS;
