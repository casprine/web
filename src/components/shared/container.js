import React, { Fragment } from "react";
import styled from "styled-components";

const Container = ({ children }) => {
	return (
		<Fragment>
			<StyledContainer>{children}</StyledContainer>
		</Fragment>
	);
};

const StyledContainer = styled.div`
	width: 70%;
	margin: 0 auto;

	@media (max-width: 750px) {
		width: 100%;
	}
`;

export default Container;
