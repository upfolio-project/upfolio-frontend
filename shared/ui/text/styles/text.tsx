import styled from "styled-components";
import {fonts, colors} from "@/shared/styles";
import React from "react";


export interface TextProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "size" | "style" | "type"> {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "accent" | "accentLight" | "success";
    style?: "normal" | "italic" | "bold";
    children?: React.ReactNode | React.ReactNode[];
    as?: "p" | "span";
    align?: "left" | "center" | "right";
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
        case "accent":
            return colors.colorAccent;
        case "accentLight":
            return colors.colorAccent50;
        case "success":
            return colors.colorSuccess;
    }
}

export function Text({className, size, style, type, children, as, align}: TextProps) {
    return <TextStyled
        className={className}
        s={size}
        st={style}
        t={type}
        as={as ? as : "p"}
        a={align}
    >
        {children}
    </TextStyled>;
}

export interface InnerTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    s?: "s" | "m" | "l";
    t?: "default" | "defaultLight" | "accent" | "accentLight" | "success";
    st?: "normal" | "italic" | "bold";
    as?: "span" | "p";
    a?: "left" | "center" | "right";
}

const TextStyled = styled.p<InnerTextProps>`
  font: ${props => getFont({size: props.s, style: props.st})};
  color: ${props => getColor({type: props.t})};
  text-align: ${props => props.a ? props.a : "left"};
`;
