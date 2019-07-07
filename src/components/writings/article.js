import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

// Theme
import { grey, projectCard, borders, white, LinkBg } from "../shared/theme";

const Article = ({ title, description, slug, date }) => {
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
					<div className="flex">
						<div className="tag">React </div>
						<div className="date">{date}</div>
					</div>
				</StyledArticle>
			</Link>
		</Fragment>
	);
};

const StyledArticle = styled.a`
	.flex {
		display: flex;
		align-items: flex-end;
	}

	.title {
		font-family: "ibm-plex", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-size: 18px;
		margin-top: 25px;
		display: inline-block;
		color: ${white};
		position: relative;

		&:after {
			content: " ";
			position: absolute;
			top: 60%;
			left: -0.1em;
			right: -0.1em;
			bottom: 0;
			transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
			background-color: ${LinkBg};
		}

		&:hover {
			&:after {
				top: 0%;
			}
		}
	}

	.description {
		color: ${grey};
		margin: 8px 0;
		line-height: 1.6;
		font-size: 16px;
		font-family: "inter-regular", system-ui, -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
	}

	.date {
		color: ${grey};
		font-family: "ibm-plex", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-size: 0.83333em;
		margin-left: auto;
	}

	.tag {
		color: ${grey};
		font-family: "ibm-plex", system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		font-size: 0.9rem;
		/*margin: 15 0 px;*/
	}
`;

export default Article;
