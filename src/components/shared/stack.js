import React from "react";
import styled from "styled-components";
import { projectCard } from "./theme";

const Stack = ({ name }) => <StyledStack>{name}</StyledStack>;

const StyledStack = styled.div`
  margin-right: 10px;
  display: inline-block;
  font-family: "apercu";
  margin-bottom: 5px;
  background: ${projectCard};
  padding: 0.2rem 0.3rem !important;
  border-radius: 2px;
  color: white;
  text-transform: lowercase;

  &:first-child {
    margin-left: 0;
  }
`;

export default Stack;
