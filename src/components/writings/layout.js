import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";

// Theme
import { grey, white } from "../shared/theme";

const BlogPostLayout = ({ route, children }) => {
	console.log(route);
	return (
		<Fragment>
			<StyledBlogPost>{children}</StyledBlogPost>
		</Fragment>
	);
};

const StyledBlogPost = styled.div`
	width: 80%;
	margin: 0 auto;
	outline: 1px solid red;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong .h {
		font-family: "apercu";
		font-weight: 100 !important;
		font-size: 2rem;
		color: ${white};
	}

	p {
		color: ${grey};
		line-height: 28px;
		font-size: 16px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
			Roboto, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
	}
	* {
	}
`;
export default BlogPostLayout;
