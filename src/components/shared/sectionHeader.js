import React, { Fragment } from "react";
import styled from "styled-components";
import { black, grey } from "./theme";

const SectionHeader = () => {
  return (
    <Fragment>
      <StyledSectionHeader className="section">
        <div className="title">Project</div>
        <div className="about"> Native. web. Open Source</div>
        <div className="description">
          {" "}
          Projects I have worked ranging from mobile apps , design works to web
          applications{" "}
        </div>
      </StyledSectionHeader>
    </Fragment>
  );
};

const StyledSectionHeader = styled.div`
  * {
    outline: 1px solid red;
  }

  outline: 1px solid red;
`;

export default SectionHeader;
