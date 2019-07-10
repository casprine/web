import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism, tomorrow } from "react-syntax-highlighter/styles/prism";

// theme
import { projectCard, footer } from "../shared/theme";

// context
import { ContextConsumer } from "../../context/index";

const CodeBlockJS = props => {
	const classNames = props.className.split(" ");
	const lang = classNames[0].substring(9);
	const fileName = props.metastring;
	return (
		<Fragment>
			<ContextConsumer>
				{({ theme, footer }) => {
					console.log(theme);
					return (
						<StyledCodeBlocks className="code-block">
							{fileName ? (
								<StyledFileName>{fileName}</StyledFileName>
							) : null}
							<SyntaxHighlighter
								language={lang}
								customStyle={{
									fontSize: 14,
									fontFamily: "ibm-plex",
									borderBottomLeftRadius: "3px",
									borderBottomRightRadius: "3px"
								}}
								codeTagProps={{
									fontSize: 14
								}}
								style={theme ? prism : tomorrow}
							>
								{props.children}
							</SyntaxHighlighter>
						</StyledCodeBlocks>
					);
				}}
			</ContextConsumer>
		</Fragment>
	);
};

const StyledCodeBlocks = styled.div`
	width: 80vw;
	margin-left: 50%;
	transform: translateX(-50%);
	@media (max-width: 500px) {
		width: 95vw;
	}

	pre {
		background: ${footer} !important;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
			0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
		font-feature-settings: "kern", "liga", "dlig", "hlig", "cswh" !important;
	}
`;

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
