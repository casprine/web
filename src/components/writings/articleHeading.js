import React, { Fragment } from "react";
import styled from "styled-components";

// helpers
import { formatPostDate } from "../../utils/helpers";

// Context
import { ContextConsumer } from "../../context";

// Theme
import { white, grey, projectCard } from "../shared/theme";

const ArticleHeading = ({ title, date }) => {
	return (
		<Fragment>
			<StyledArticleHeading>
				<h1 className="book title"> {title}</h1>
				<div className="date">{formatPostDate(date)}</div>
			</StyledArticleHeading>
		</Fragment>
	);
};

const StyledArticleHeading = styled.div`
	color: ${white};
	margin-bottom: 25px;
	font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
		"Helvetica Neue", sans-serif;

	.title {
		font-size: 40px;
		letter-spacing: -0.04em;
		font-weight: 500;
		margin: 0;
		font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		@media (max-width: 450px) {
			font-size: 26px;
		}
	}

	.date {
		font-family: "ibm-plex", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		margin-top: 3px;
		color: ${grey};
		border: 2px solid ${projectCard};
		padding: 2px 8px;
		display: inline-block;
		border-radius: 3px;
		font-size: 0.9rem;
		letter-spacing: -0.04em;
	}
`;

export default ArticleHeading;
