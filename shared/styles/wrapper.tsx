import styled from "styled-components";
import {Box} from "@mui/material";
import {borders, shadows, sizes} from "@/shared/styles/variables";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${sizes.m};
  gap: ${sizes.s};
  border-radius: ${borders.radius10};
  box-shadow: ${shadows.defaultShadow};
`;

export {Wrapper};