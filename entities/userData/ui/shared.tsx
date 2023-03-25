import styled from "styled-components";
import {Box} from "@mui/material";
import {borders, colors} from "@/styles/variables";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 47px;
  gap: 20px;
  border: ${borders.width2px(colors.colorSecondary05)};
  border-radius: ${borders.radius10};
`;

export {Wrapper};