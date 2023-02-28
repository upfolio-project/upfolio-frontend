import styled from "styled-components";
import {ExampleFeature} from "./exampleFeature";

export const ExampleFeatureStyled = styled(ExampleFeature)`
  border: 1px solid blue;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;