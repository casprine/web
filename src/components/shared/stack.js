import React from "react";
import styled from "styled-components";

// theme
import { projectCard, white } from "./theme";

const Stack = ({ name }) => <StyledStack>{name}</StyledStack>;

const StyledStack = styled.div`
  font-family: "apercu", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  margin-right: 10px;
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 5px;
  border: 2px solid ${projectCard};
  padding: 2px 8px;
  border-radius: 2px;
  color: ${white};
  text-transform: lowercase;

  &:first-child {
    margin-left: 0;
  }
`;

export default Stack;
