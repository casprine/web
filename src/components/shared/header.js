import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { white } from "../shared/theme";
import { ContextConsumer } from "../../context/index";
// import { ActiveLink } from "./link";
import Link from "next/link";
import ThemeChanger from "./themeChanger";
const Header = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <Fragment>
          <ThemeProvider theme={{ mode: theme }}>
            <StyledHeader>
              <Link href="/">
                <div className="logo">C</div>
              </Link>

              <div className="links">
                <Link href="/work">
                  <span>Works</span>
                </Link>
                {/* <Link href="/design">
                  <span>Design</span>
                </Link> */}
                <a href="https://casprine-blog.now.sh/" target="_blank">
                  <span>Writings</span>
                </a>
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

  @media (max-width: 750px) {
    padding-bottom: 30px;
  }
  .logo {
    cursor: pointer;
  }

  .links {
    margin: 0 auto;
    cursor: pointer;

    span {
      padding: 0 8px;
      position: relative;

      :hover {
        text-decoration: line-through ${white};
      }
    }
  }
`;

export default Header;
