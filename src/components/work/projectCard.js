import React, { Fragment } from "react";
import styled from "styled-components";

// theme
import { white, grey, black, projectCard, borders } from "../shared/theme";
import { Stack } from "../shared";

const ProjectCard = ({ name, stacks, about, github }) => {
  return (
    <Fragment>
      <StyledProject className="project">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="name">{name}</div>
          <div className="description">{about}</div>
        </a>

        <div className="stacks flex">
          {stacks.map((stack, i) => (
            <Stack name={stack} key={i} className="stack" />
          ))}
        </div>
      </StyledProject>
    </Fragment>
  );
};

const StyledProject = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  color: ${white};
  @media (max-width: 750px) {
    padding: 0.8rem 1rem;
  }

  .name {
    font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 17px;
    margin-top: 25px;
    border-bottom: 2px solid ${borders};
    transition: all 0.25s;
    display: inline-block;
    color: ${white};
    &:hover {
      border-bottom: 2px solid ${projectCard};
    }
  }

  .description {
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 0.9rem;
    color: ${grey};
    display: block;
    margin: 5px 0;

    @media (max-width: 750px) {
      font-size: 15px;
    }
  }

  .stacks {
    .stack {
      font-size: 0.7rem;
    }
  }
`;

export default ProjectCard;
