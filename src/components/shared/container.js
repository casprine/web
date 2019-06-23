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
		width: 100% !important;
		margin-top: 15px 0 !important;
		margin-bottom: 100px;
	}

	@media (max-width: 1120px) {
		width: 90%;
	}
`;

export default Container;
