import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

// Theme
import { grey, projectCard, borders, white } from "../shared/theme";

const Article = ({ title, description, slug }) => {
	return (
		<Fragment>
			<Link prefetch passHref href={`/writings/${slug}`}>
				<StyledArticle>
					<div className="title">{title}</div>
					<div className="description">
						Debugging builds are harder than debugging your
						application code because you can't really add debugger
						or console.log in your code to find out what's
						happening. It's a black box - config in, bundle out.
					</div>
				</StyledArticle>
			</Link>
		</Fragment>
	);
};

const StyledArticle = styled.a`
	.title {
		font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-size: 20px;
		margin-top: 25px;
		border-bottom: 2px solid ${borders};
		transition: all 0.25s;
		display: inline-block;
		color: ${white};
		&:hover {
			border-bottom: 2px solid ${projectCard};
		}
	}

	.description {
		color: ${grey};
		margin: 5px 0;
		line-height: 28px;
		font-size: 16px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}
`;

export default Article;
