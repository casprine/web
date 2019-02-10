import React, { Fragment } from "react";
import styled from "styled-components";
import { white, border, darkBorder } from "../shared/theme";

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
  background: white;
  border-top: 5px solid ${border};
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  min-height: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07), 0 15px 35px rgba(50, 50, 93, 0.1);
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07),
      0 15px 35px rgba(50, 50, 93, 0.1);
    transform: translateY(-10px);
    border-top: 5px solid ${darkBorder};
  }

  div {
    padding: 0.5rem 0;
  }

  .name {
    letter-spacing: -0.03em;
    line-height: 1.1;
    word-wrap: break-word;
    font-family: "geo";
    font-size: 1.5rem;
    color: hsl(209, 61%, 16%);
  }

  .description {
    margin-top: auto;
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1rem;
    color: hsl(209, 34%, 30%);
    text-rendering: auto;
    font-family: "geo";
  }

  .stacks {
    margin-top: auto;
    font-size: 17px;
    text-transform: lowercase;
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      margin: 0 5px;
      color: hsl(209, 34%, 30%);
      font-family: "expo2";
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default ProjectCard;
