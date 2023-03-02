import styled from "styled-components";
import {TextField} from "@mui/material";
import {borders, colors, fonts} from "@/styles/variables";
import {RefObject} from "react";

export interface InputProps {
    type?: "phone" | "password" | "default" | "email";
    hint?: string;
    label?: string;
    hintType?: "default" | "secondary" | "success";
    placeholder?: string;
    onChange?: (value: string) => void;
    inputRef?: RefObject<HTMLInputElement | null>;
}


export const DefaultInput = styled(TextField)`
  & label {
    transition: color .3s;
    display: block;
    position: unset;
    margin: 0 0 5px;
    transform: none;
    color: ${colors.colorSecondary} !important;
    font: ${fonts.mn};
  }

  & fieldset {
    transition: .3s border;
    border: ${borders.width2px(colors.colorAccent)};
    border-radius: ${borders.radius10};
    box-sizing: border-box;
    padding: 0 18px;
    height: 40px;
    top: 0;

    & legend {
      display: none;
    }
  }

  & input {
    height: 40px;
    box-sizing: border-box;
    padding: 0 18px;
    font: ${fonts.mn};

    &:hover ~ fieldset, &:focus ~ fieldset {
      border: ${borders.width2px(colors.colorAccent50)} !important;
    }
  }

  & p {
    color: ${colors.colorSecondary50};
    margin: 3px 0 0;
    font: ${fonts.sn}
  }
`;
