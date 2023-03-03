import {Button as ButtonMUI, ButtonProps as ButtonMUIProps} from "@mui/material";
import styled from "styled-components";
import React from "react";
import {borders, colors} from "@/styles/variables";
import {Text} from "@/shared/ui/text";

interface ButtonProps {
    type?: "default" | "success";
    fill?: boolean;
    children?: React.ReactNode;
}

interface InnerButtonProps extends ButtonMUIProps {
    t?: "default" | "success";
    fill?: boolean;
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonUI t={props.type} fill={props.fill === undefined ? true : props.fill}>{<Text size="m">{props.children}</Text>}</ButtonUI>
    );
};


function getBackgroundColor({t, fill}: InnerButtonProps) {
    if (fill === false) return "transparent";
    switch (t) {
        case undefined:
        case "default":
            return colors.colorSecondary;
        case "success":
            return colors.colorAccent;
    }
}

function getTextColor({t, fill}: InnerButtonProps) {
    if (fill === false) return colors.colorSecondary;
    switch (t) {
        case undefined:
        case "default":
            return colors.colorDominant;
        case "success":
            return colors.colorSecondary;
    }
}

function getTextColorHover({t}: InnerButtonProps) {
    switch (t) {
        case undefined:
        case "default":
            return colors.colorDominant;
        case "success":
            return colors.colorSecondary;
    }
}

function getBorderColor({t}: InnerButtonProps) {
    switch (t) {
        case undefined:
        case "default":
            return colors.colorSecondary;
        case "success":
            return colors.colorAccent;
    }
}

function getBackgroundColorHover({fill, t}: InnerButtonProps) {
    switch (t) {
        case undefined:
        case "default": {
            if (fill) return colors.colorSecondary50;
            return colors.colorSecondary;
        }
        case "success": {
            if (fill) return colors.colorAccent50;
            return colors.colorAccent;
        }
    }
}

export const ButtonUI = styled(ButtonMUI)<InnerButtonProps>`
  transition: all .3s;
  box-sizing: border-box;
  text-transform: unset;
  border: ${props => borders.width2px(getBorderColor(props))};
  border-radius: ${borders.radius10};
  background-color: ${props => getBackgroundColor(props)};
  padding: 10px 26px;
  height: max-content;
  
  & p {
    transition: all .3s;
    color: ${props => getTextColor(props)};
    
  }

  &:hover {
    opacity: 1;
    background-color: ${props => getBackgroundColorHover(props)};
    border: ${borders.width2px(colors.colorTransparent)};
    
    & p {
      color: ${props => getTextColorHover(props)} !important;
      
    }
  }
`;