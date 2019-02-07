import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";

const RightSide = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <ThemeProvider theme={{ mode: theme }}>
          <StyledRightSide>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              aliquam consectetur atque, consequatur delectus ratione laboriosam
              maiores commodi mollitia eos recusandae excepturi fuga doloribus
              tempore voluptatem autem perspiciatis ex et?
            </div>
          </StyledRightSide>
        </ThemeProvider>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledRightSide = styled.div`
  color: ${white};
`;

export default RightSide;
