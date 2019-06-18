import React from "react";
import styled from "styled-components";
import { projectCard } from "./theme";

const Stack = ({ name }) => <StyledStack>{name}</StyledStack>;

const StyledStack = styled.span`
  /* display: block; */
  margin-right: 5px;
  font-family: "inter";
  background: ${projectCard};
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  /* margin-bottom: 1rem; */

  &:first-child {
    margin-left: 0;
  }
`;

export default Stack;
