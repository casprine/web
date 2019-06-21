import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

// Theme
import { grey, projectCard, borders } from "../shared/theme";

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
					</div>{" "}
				</StyledArticle>
			</Link>
		</Fragment>
	);
};

const StyledArticle = styled.a`
	.title {
		font-family: "apercu";
		font-size: 20px;
		margin-top: 25px;
		border-bottom: 2px solid ${borders};
		transition: all 0.25s;
		display: inline-block;
		&:hover {
			border-bottom: 2px solid ${projectCard};
		}
	}

	.description {
		color: ${grey};
		margin: 5px 0;
	}
`;

export default Article;
