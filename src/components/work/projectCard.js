import React, { Fragment } from "react";
import styled from "styled-components";
import { white, grey, black, projectCard } from "../shared/theme";
import { Stack } from "../shared";

const ProjectCard = ({ name, stacks, about, github }) => {
  return (
    <Fragment>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <StyledProject className="project">
          <div className="name">{name}</div>
          <div className="description">{about}</div>

          <div className="stacks flex">
            {stacks.map((stack, i) => (
              <Stack name={stack} key={i} />
            ))}
          </div>
        </StyledProject>
      </a>
    </Fragment>
  );
};

const StyledProject = styled.div`
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  color: ${white};
  background: ${black};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  border-top: 3px solid ${projectCard};

  div {
    padding: 0.5rem 0;
    @media (max-width: 750px) {
      padding: 0.25rem 0;
    }
  }

  @media (max-width: 750px) {
    padding: 0.8rem 1rem;
  }

  .name {
    letter-spacing: -0.03em;
    line-height: 1.1;
    font-family: "apercu";
    font-size: 1.5rem;
  }

  .description {
    margin-top: auto;
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1rem;
    text-rendering: auto;
    color: ${grey};

    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
`;

export default ProjectCard;
