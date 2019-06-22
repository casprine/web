import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";

// Theme
import { grey, white } from "../shared/theme";

// components
import ArticleHeading from "./articleHeading";
import { SEO } from "../shared";
import ShareIt from "./share";

// helpers
import me from "../../../config";
import { sortedWritings } from "../../utils/helpers";

// Data
import writings from "../../data/writings.json";

const BlogPostLayout = ({ route, children }) => {
	const slug = route.substring(10);
	const url = `${me.url}/writings/${slug}`;

	const { title, date } = writings[slug];

	return (
		<Fragment>
			<SEO title={title}></SEO>
			<StyledBlogPost>
				<ArticleHeading title={title} date={date}></ArticleHeading>
				{children}

				<ShareIt url={url} title={title}></ShareIt>
			</StyledBlogPost>
		</Fragment>
	);
};

const StyledBlogPost = styled.div`
	width: 90%;
	margin: 0 auto;

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
	}
`;

export default BlogPostLayout;
