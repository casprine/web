import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

// Theme
import { grey, projectCard, borders, white } from "../shared/theme";

const Article = ({ title, description, slug, date }) => {
	console.log(date, "date");
	return (
		<Fragment>
			<Link prefetch passHref href={`/writings/${slug}`}>
				<StyledArticle>
					<div className="data">{date}</div>
					<div className="title">{title}</div>

					<div className="tag">React</div>
				</StyledArticle>
			</Link>
		</Fragment>
	);
};

const StyledArticle = styled.a`
	outline: 1px solid red;
	display: flex;
	align-items: center;

	.title {
		font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-size: 20px;
		border-bottom: 2px solid ${borders};
		transition: all 0.25s;
		letter-spacing: -0.04em;
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
