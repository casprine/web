import React from "react";
import styled from "styled-components";
import { projectCard } from "./theme";

const Stack = ({ name }) => <StyledStack>{name}</StyledStack>;

const StyledStack = styled.div`
  display: block;
  margin-right: 10px !important;
  font-family: "apercu";
  margin-bottom: 5px;
  background: ${projectCard};
  padding: 0.2rem 0.3rem;
  border-radius: 2px;
  text-transform: lowercase;
  &:first-child {
    margin-left: 0;
  }
`;

export default Stack;
