import styled from "styled-components";
import {ExampleEntity} from "./exampleEntity";

const ExampleEntityStyled = styled(ExampleEntity)`
  border: 1px solid red;
  padding: 4px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;
`;

export {ExampleEntityStyled};