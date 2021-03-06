import React, { Fragment } from "react";
import styled from "styled-components";
import { grey, white } from "./theme";

const SectionHeader = () => {
  return (
    <Fragment>
      <StyledSectionHeader className="section">
        <div className="title"> Native. web. Open Source</div>
        <div className="description">
          Projects I have worked ranging from mobile apps , design works to web
          applications.
        </div>
      </StyledSectionHeader>
    </Fragment>
  );
};

const StyledSectionHeader = styled.div`
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 560px) {
    margin-top: 20px;
  }

  .title {
    letter-spacing: -0.03em;
    line-height: 1.1;
    word-wrap: break-word;
    font-size: 3rem;
    color: ${white};
    text-rendering: auto;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;

    @media (max-width: 655px) {
      font-size: 30px;
    }
  }

  .description {
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1.2rem;
    color: ${grey};
    text-transform: lowercase;
    @media (max-width: 655px) {
      font-size: 15px;
    }
  }
`;

export default SectionHeader;
