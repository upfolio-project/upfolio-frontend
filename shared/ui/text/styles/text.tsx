import styled from "styled-components";
import {fonts, colors} from "@/styles/variables";
import React from "react";


export interface TextProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "size" | "style" | "type"> {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "success" | "successLight";
    style?: "normal" | "italic" | "bold";
    children?: React.ReactNode | React.ReactNode[];
    as?: "p" | "span"
}

function getFont({size, style}: TextProps) {
    style = !style ? "normal" : style;
    size = !size ? "m" : size;
    switch (true) {
        case (size === "l"):
            return fonts.l({style: style});
        case undefined:
        case (size === "m"):
            return fonts.m({style: style});
        case (size === "s"):
            return fonts.s({style: style});
    }

}

function getColor({type}: TextProps) {
    switch (type) {
        case undefined:
        case "default":
            return colors.colorSecondary;
        case "defaultLight":
            return colors.colorSecondary50;
        case "success":
            return colors.colorAccent;
        case "successLight":
            return colors.colorAccent50;
    }
}

export function Text({size, style, type, children, as}: TextProps) {
    return <TextStyled s={size} st={style} t={type} as={as ? as : "p"}>{children}</TextStyled>;
}

export interface InnerTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    s?: "s" | "m" | "l";
    t?: "default" | "defaultLight" | "success" | "successLight";
    st?: "normal" | "italic" | "bold";
    as?: "span" | "p";
}

const TextStyled = styled.p<InnerTextProps>`
  font: ${props => getFont({size: props.s, style: props.st})};
  color: ${props => getColor({type: props.t})};
`;
