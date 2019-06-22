import React, { Fragment } from "react";
import styled from "styled-components";

// helpers
import { formatPostDate } from "../../utils/helpers";

// Context
import { ContextConsumer } from "../../context";

// Theme
import { white } from "../shared/theme";

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
	margin-bottom: 10px;
	* {
		outline: 1px solid red;
	}
	.title {
		font-size: 40px;
		letter-spacing: 0.2px;
		line-height: 52px;
		font-weight: 500;
		margin: 0;

		@media (max-width: 450px) {
			font-size: 26px;
		}
	}
	.date {
		margin-top: 3px;
	}
`;

export default ArticleHeading;
