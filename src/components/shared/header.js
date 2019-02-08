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
  padding: 50px 0;
  font-family: "geo";
  color: ${white};
  display: flex;

  .links {
    margin: 0 auto;
    cursor: pointer;

    span {
      padding: 0 8px;

      &:hover {
        ::before {
          content: "Casprine";
          position: absolute;
          bottom: 2px;
          left: 0px;
          background-color: #feef6d;
          height: 4px;
          width: 20%;
          z-index: -1;
          transition: width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
    }
  }
`;

export default Header;
