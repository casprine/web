import React, { Fragment } from "react";
import { white, projectCard } from "../shared/theme";

import styled from "styled-components";

const ShareLink = ({ url, title }) => {
  return (
    <Fragment>
      <StyledShareLink
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        )}
      >
        <Icon aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
          </svg>
        </Icon>
        <span>Share on Twitter</span>
      </StyledShareLink>
    </Fragment>
  );
};

const ShareIt = props => {
  return (
    <Fragment>
      <StyledShareIt>
        <Hr />

        <p className="text">
          I really hope you enjoyed reading this post! <br />
          Kindly share on Twitter to reach others.
        </p>

        <ShareLink {...props} />
      </StyledShareIt>
    </Fragment>
  );
};

const StyledShareLink = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 14px;
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;

  color: white;
  border-radius: 4px;
  background: ${projectCard};
  font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  &:active {
    background: #e5e5e8;
  }
`;

const Icon = styled.span`
  margin-right: 7px;
  display: block;
  margin-top: 2px;

  svg {
    width: 18px;
    height: 18px;
    fill: white;
  }
`;

const StyledShareIt = styled.div`
  margin: 70px 0 !important;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    font-size: 1.2rem;
    color: ${white};
    font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    text-align: center;

    @media (max-width: 750px) {
      font-size: 1rem;
    }
  }
`;

const Hr = styled.hr`
  margin-bottom: 42px;
  display: block;
  border: 0;
  text-align: center;
  overflow: visible;
  height: 0;
  width: 100%;

  &:before {
    font-weight: 900;
    font-style: italic;
    font-size: 2rem;
    letter-spacing: 0.6em;
    content: "....";
    display: inline-block;
    color: ${white};
    position: relative;
    top: -30px;
  }
`;
export default ShareIt;
