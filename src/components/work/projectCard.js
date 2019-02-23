import React, { Fragment } from "react";
import styled from "styled-components";
import { white, grey } from "../shared/theme";

const ProjectCard = ({ name, stacks, about, github }) => {
  return (
    <Fragment>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <StyledProject className="project">
          <div className="name">{name}</div>
          <div className="description">{about}</div>
          <div className="stacks ">
            {stacks.map((stack, i) => (
              <span className="stack" key={i}>
                {stack}
              </span>
            ))}
          </div>
        </StyledProject>
      </a>
    </Fragment>
  );
};

const StyledProject = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  color: ${white};
  border: 5px solid white;
  border-radius: 4px;

  div {
    padding: 0.5rem 0;
    @media (max-width: 750px) {
      padding: 0.25rem 0;
    }
  }

  @media (max-width: 750px) {
    border: none;
    padding: 0;
  }

  .name {
    letter-spacing: -0.03em;
    line-height: 1.1;
    word-wrap: break-word;
    font-family: "expo2";
    font-size: 1.5rem;
  }

  .description {
    margin-top: auto;
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1rem;
    text-rendering: auto;
    font-family: "geo";
    color: ${grey};

    @media (max-width: 750px) {
      font-size: 15px;
    }
  }

  .stacks {
    margin-top: auto;
    font-size: 16px;
    text-transform: lowercase;
    display: flex;
    flex-wrap: wrap;
    color: ${grey};

    span {
      display: block;
      margin: 0 5px;
      font-family: "expo2";
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default ProjectCard;
