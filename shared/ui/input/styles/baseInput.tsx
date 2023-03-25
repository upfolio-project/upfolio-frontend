import styled from "styled-components";
import {TextField} from "@mui/material";
import {borders, colors, fonts} from "@/styles/variables";
import React, {RefObject} from "react";

interface DefaultInputProps {
    type?: "phone" | "default" | "email";
    hint?: React.ReactNode;
    label?: string;
    hintType?: "default" | "secondary" | "success";
    placeholder?: string;
    onChange?: (value: string) => void;
    inputRef?: RefObject<HTMLInputElement | null>;
    hintAlign?: "left" | "center" | "right";
    autocomplete?: "username"
    defaultValue?: React.ReactNode
    before?: React.ReactNode
    className?: string
}

interface PasswordInputProps extends Omit<DefaultInputProps, "type" | "autocomplete"> {
    type: "password";
    autocomplete?: "current-password" | "new-password"
}

export type InputProps = DefaultInputProps | PasswordInputProps

interface TextFieldExtendsProps extends Omit<typeof TextField, ""> {
    ha?: "left" | "center" | "right";
}

export const DefaultInput = styled(TextField)<TextFieldExtendsProps>`
  width: 100%;
  overflow: hidden;

  & label {
    transition: color .3s;
    display: block;
    position: unset;
    margin: 0 0 5px;
    transform: none;
    color: ${colors.colorSecondary} !important;
    font: ${fonts.m()};
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
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 18px;
    font: ${fonts.m()};

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 1 !important;
      color: ${colors.colorSecondary50}

    }

    :-ms-input-placeholder {
      opacity: 1 !important;
      color: ${colors.colorSecondary50}

    }

    &:hover ~ fieldset, &:focus ~ fieldset {
      border: ${borders.width2px(colors.colorAccent50)} !important;
    }
  }

  & > p {
    margin: 3px 0 0;
    width: 100%;
    display: flex;
    justify-content: ${props => props.ha || "left"};
  }

  & > div {
    overflow: hidden;
    border-radius: ${borders.radius10};
    background-color: ${colors.colorDominant};
  }
`;
