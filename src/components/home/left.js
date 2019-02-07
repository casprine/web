import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";

const LeftSide = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <ThemeProvider theme={{ mode: theme }}>
          <StyledLeftSide>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              aliquam consectetur atque, consequatur delectus ratione laboriosam
              maiores commodi mollitia eos recusandae excepturi fuga doloribus
              tempore voluptatem autem perspiciatis ex et?
            </div>
          </StyledLeftSide>
        </ThemeProvider>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledLeftSide = styled.div`
  color: ${white};
`;

export default LeftSide;
