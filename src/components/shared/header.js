import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContextConsumer } from "../../context/index";
import Link from "next/link";
import ThemeChanger from "./themeChanger";
import { footer, footerText, white } from "./theme";

const logger = () => {
  console.log("clicked");
  alert("Logged");
};

const Header = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <>
          <ThemeProvider theme={{ mode: theme }}>
            <StyledHeader>
              <Link href="/">
                <div className="logo">C</div>
              </Link>

              <div className="links">
                <Link href="/work">
                  <span>Works</span>
                </Link>
                <Link href="/design">
                  <span>Design</span>
                </Link>
                <a href="https://casprine-blog.now.sh/" target="_blank">
                  <span>Writings</span>
                </a>
              </div>

              <div className="toggler">
                <ThemeChanger />
              </div>
            </StyledHeader>
          </ThemeProvider>
        </>
      )}
    </ContextConsumer>

    <ContextConsumer>
      {({ footer, toggleFooter }) => (
        <>
          <StyledBottomNav>
            <div className={footer ? "nav" : "none"}>
              <div className="switch">
                <ThemeChanger />
              </div>
              <nav>
                <div className="link">
                  <Link href="/work">
                    <span>Work</span>
                  </Link>
                </div>

                <div className="link">
                  <Link href="/design">
                    <span>Design</span>
                  </Link>
                </div>

                <div className="link">
                  <a href="https://casprine-blog.now.sh/" target="_blank">
                    <span>Writings</span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="bar">
              <div className="logo">c</div>
              <div className="open" onClick={toggleFooter}>
                <span>&#11044;</span>
                <span>&#11044;</span>
                <span>&#11044;</span>
              </div>
            </div>
          </StyledBottomNav>
        </>
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
    display: none;
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

const StyledBottomNav = styled.header`
  --safePaddingBottom: env(safe-area-inset-bottom);
  padding-bottom: calc(16px + var(--safePaddingBottom));
  padding-top: calc(16px + var(--safePaddingBottom));

  display: none;
  padding: 10px 0;
  grid-template-columns: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${footer};
  transition: all 0.3s;
  color: ${footerText};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 750px) {
    display: grid;
  }

  .bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;

    /* * {
      outline: 1px solid red;
    } */

    .open {
      margin-left: auto;
      letter-spacing: 5px;
      font-size: 7px;
    }
  }

  .none {
    display: none;
  }

  .nav {
    display: grid;

    nav {
      flex-direction: column;
      display: flex;
      width: 100%;
      align-items: center;

      .link {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        padding: 16px 30px;
      }
    }

    .switch {
      padding: 12px 24px;
    }
  }
`;

export default Header;
