import React, { Fragment } from "react";
import styled from "styled-components";
import { grey, white } from "./theme";

const SectionHeader = () => {
  return (
    <Fragment>
      <StyledSectionHeader className="section">
        <div className="title">Projects</div>
        <div className="about"> Native. web. Open Source</div>
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

  @media (max-width: 560px) {
    margin-top: 20px;
  }

  .title {
    color: ${white};
    font-size: 1.6rem;
    text-transform: capitalize;
    margin-bottom: 0.8rem;
    padding-left: 4rem;
    position: relative;
    font-family: "";

    :before {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -4px;
      height: 4px;
      width: 3rem;
      content: "";
      background: hsl(36, 77%, 49%);
    }
  }

  .about {
    letter-spacing: -0.03em;
    line-height: 1.1;
    word-wrap: break-word;
    font-size: 3rem;
    color: ${white};
    text-rendering: auto;
    text-transform: capitalize;
    margin-bottom: 0.8rem;
    font-family: "geo";

    @media (max-width: 655px) {
      font-size: 30px;
    }
  }

  .description {
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1.2rem;
    color: ${grey};
    margin-bottom: 0.8rem;
  }
`;

export default SectionHeader;
