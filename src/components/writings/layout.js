import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

// Theme
import { grey, white } from "../shared/theme";

// components
// import ArticleHeading from "./articleHeading";
import { SEO } from "../shared";
import ShareIt from "./share";
import Code from "./syntaxHighlighter";

// helpers
import me from "../../../config";

// Data
import writings from "../../data/writings.json";

const BlogPostLayout = ({ route, children }) => {
	const slug = route.substring(10);
	const url = `${me.url}/writings/${slug}`;

	const { title, date } = writings[slug];

	return (
		<Fragment>
			<MDXProvider
				components={{
					code: Code,
					inlineCode: InlineCode
				}}
			>
				<SEO title={title} url={url} />
				<StyledBlogPost>
					<ArticleHeading title={title} date={date} />
					{children}
					<ShareIt url={url} title={title} />
				</StyledBlogPost>
			</MDXProvider>
		</Fragment>
	);
};

const InlineCode = styled.code`
	padding-left: 1px;
	padding-right: 1px;
	display: inline-block;
	line-height: 1.45;
	font-family: "Monaco", monospace;

	color: #444;
	border-radius: 2px;
	background: #f4f4f6;
`;

const StyledBlogPost = styled.div`
	width: 90%;
	margin: 0 auto;

	@media (max-width: 750px) {
		width: 100%;
		margin-top: 15px;
		margin-bottom: 100px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-weight: 100 !important;
		color: ${white};
	}

	strong,
	b {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}

	p {
		color: ${grey};
		line-height: 28px;
		font-size: 16px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}
	* {
		outline: 1px solid red !important;
	}
`;

export default BlogPostLayout;
