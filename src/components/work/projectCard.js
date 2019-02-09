import React, { Fragment } from "react";
import styled from "styled-components";
import { black, white, grey } from "../shared/theme";

const ProjectCard = ({ name, stacks, logoUrl: img, about, link }) => {
  return (
    <Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <StyledProject className="project">
          <div className="details">
            <span className="name">{name}</span>
          </div>
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
  border-top: 5px solid ${white};
  padding: 1.5rem 1.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 15px,
    rgba(50, 50, 93, 0.1) 0px 15px 35px;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;

  &:hover {
    transform: translate(0, -10px);
    border-top: 5px solid hsl(36, 77%, 49%);
  }

  .details {
    letter-spacing: -0.03em;
    line-height: 1.1;
    word-wrap: break-word;
    font-size: 1.5rem;
    display: flex;
    margin-bottom: 20px;

    span {
      display: block;
      margin: auto 0;
    }

    .name {
      margin-right: auto;
      letter-spacing: -0.03em;
      line-height: 1.1;
      word-wrap: break-word;
      font-family: "expo2";
      font-size: 1.5rem;
      color: hsl(209, 61%, 16%);
    }
  }

  .description {
    margin-top: auto;
    letter-spacing: -0.02em;
    line-height: 1.4;
    font-size: 1rem;
    color: #1d2323;
    margin-bottom: 1rem;
    text-rendering: auto;
    font-family: "Book", $defaultFont;
  }

  .stacks {
    margin-top: auto;
    font-size: 17px;
    text-transform: lowercase;
    outline: 1px solid red;
    display: flex;
    span {
      display: block;
      margin: 0 5px;
      color: ${grey};
      font-family: "geo";
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default ProjectCard;
