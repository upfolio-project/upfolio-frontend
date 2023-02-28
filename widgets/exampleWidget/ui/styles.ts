import styled from "styled-components";
import {ExampleWidget} from "./exampleWidget";

export const ExampleWidgetStyled = styled(ExampleWidget)`
  max-width: max-content;
  border: 1px solid black;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;