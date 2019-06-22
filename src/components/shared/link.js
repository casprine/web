import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
	.active {
		text-decoration: line-through;
	}
`;

export const ActiveLink = withRouter(({ router, children, ...props }) => (
	<StyledLink {...props}>
		{React.cloneElement(Children.only(children), {
			className: router.pathname === props.href ? `active` : null
		})}
	</StyledLink>
));
