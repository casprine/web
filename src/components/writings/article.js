import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

const Article = ({ title, description, slug }) => {
	return (
		<Fragment>
			<Link prefetch passHref href={`/writings/${slug}`}>
				<StyledArticle>{title}</StyledArticle>
			</Link>
		</Fragment>
	);
};

const StyledArticle = styled.a`
	outline: 1px solid red;

	* {
		outline: 1px solid red;
	}
`;

export default Article;
