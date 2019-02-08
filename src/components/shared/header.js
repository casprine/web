import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white, grey } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
import Link from "next/link";
import ThemeChanger from "./themeChanger";
const Header = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <Fragment>
          <ThemeProvider theme={{ mode: theme }}>
            <StyledHeader>
              <div className="logo">C</div>

              <div className="links">
                <Link href="/projects">
                  <span>Works</span>
                </Link>
                <Link href="/design">
                  <span>Design</span>
                </Link>
                <Link href="/writings">
                  <span>Writings</span>
                </Link>
              </div>

              <div className="toggler">
                <ThemeChanger />
              </div>
            </StyledHeader>
          </ThemeProvider>
        </Fragment>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledHeader = styled.div`
  padding: 50px 0 80px 0;
  font-family: "geo";
  color: ${white};
  display: flex;

  .links {
    margin: 0 auto;
    cursor: pointer;

    span {
      padding: 0 8px;
      position: relative;
      outline: 1px solid red;
    }
  }
`;

export default Header;
