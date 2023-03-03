import styled from "styled-components";
import {ExampleWidget} from "./exampleWidget";

export const ExampleWidgetStyled = styled(ExampleWidget)`
  max-width: 60vw;  
  width: max-content;
  border: 1px solid black;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;