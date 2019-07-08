import React, { Fragment } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { tomorrow } from "react-syntax-highlighter/styles/prism";
import { projectCard } from "../shared/theme";

const CodeBlockJS = props => {
	const classNames = props.className.split(" ");
	const lang = classNames[0].substring(9);
	const fileName = props.metastring;
	return (
		<Fragment>
			<div className="outline-all">
				{fileName ? <StyledFileName>{fileName}</StyledFileName> : null}
				<SyntaxHighlighter
					language={lang}
					customStyle={{
						fontSize: 14,
						background: "#0f111a",
						fontFamily: "ibm-plex",
						borderBottomLeftRadius: "3px",
						borderBottomRightRadius: "3px"
					}}
					codeTagProps={{
						fontSize: 14
					}}
					style={tomorrow}
				>
					{props.children}
				</SyntaxHighlighter>
			</div>
		</Fragment>
	);
};

const StyledFileName = styled.figure`
	color: white;
	background: ${projectCard};
	margin: 0 !important;
	position: relative;
	text-align: center;
	padding: 10px 0;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	margin-top: 30px !important;
	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 50%;
		left: 16px;
		width: 4px;
		height: 4px;
		margin-top: -2px;
		background: white;
		border-radius: 50%;
		box-shadow: 12px 0 0 white, 24px 0 0 white;
	}
`;
export default CodeBlockJS;
