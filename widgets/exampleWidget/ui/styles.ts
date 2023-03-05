import styled from "styled-components";
import {ExampleWidget} from "./exampleWidget";

export const ExampleWidgetStyled = styled(ExampleWidget)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  
  & > * > * {
    display: inline-block;
    vertical-align: top;
    margin: 30px;
    height: max-content;
    max-width: 500px;
    
    & > * {
      margin-top: 20px;
    }
    
    & > form > * {
      margin-top: 20px;
    }
  }
`;