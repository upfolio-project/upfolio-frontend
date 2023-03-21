import {Button as ButtonMUI, ButtonProps as ButtonMUIProps} from "@mui/material";
import styled from "styled-components";
import React from "react";
import {borders, colors} from "@/styles/variables";
import {Text} from "@/shared/ui/text";

export interface ButtonProps extends Omit<ButtonMUIProps, "type" | "fill" | "width" | "children"> {
    type?: "default" | "success";
    fill?: boolean;
    children?: React.ReactNode;
    width?: "content" | "container"
}

interface InnerButtonProps extends ButtonMUIProps {
    t?: "default" | "success";
    fill?: "0" | "1";
    w?: "content" | "container"
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonUI onClick={props.onClick}
                  t={props.type}
                  fill={(props.fill === undefined || props.fill) ? "1" : "0"}
                  w={props.width}
        >
            {<Text size="m">{props.children}</Text>}
        </ButtonUI>
    );
};


function getBackgroundColor({t, fill}: InnerButtonProps) {
    if (fill === "0") return colors.colorDominant;
    switch (t) {
        case undefined:
        case "default":
            return colors.colorSecondary;
        case "success":
            return colors.colorAccent;
    }
}

function getTextColor({t, fill}: InnerButtonProps) {
    if (fill === "0") return colors.colorSecondary;
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
  width: ${props => props.w === "container" ? "100%" : "max-content"};
  text-decoration: none;

  span {
    visibility: hidden;
  }

  &:focus {
    animation: opacity 0.3s ease;
  }

  &:active {
    opacity: .2 !important;
  }

  @keyframes opacity {
    from {
      opacity: .7;
    }
    50% {
      opacity: .2;
    }
    to {
      opacity: .7;
    }
  }

  p {
    transition: all .3s;
    color: ${props => getTextColor(props)};

  }

  &:hover {
    opacity: 1;
    background-color: ${props => getBackgroundColorHover(props)};
    border: ${borders.width2px(colors.colorTransparent)};

    p {
      color: ${props => getTextColorHover(props)} !important;

    }
  }
`;