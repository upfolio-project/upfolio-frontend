import styled from "styled-components";
import {fonts, colors} from "@/styles/variables";
import React from "react";


interface HeaderProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "size" | "type" | "style"> {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "success" | "successLight";
    style?: "normal" | "italic" | "bold";
    children?: React.ReactNode | React.ReactNode[]
}

function getFont({size, style}: HeaderProps) {
    style = !style ? "normal" : style;
    switch (true) {
        case (size === "l"):
            return fonts.h1({style: style});
        case undefined:
        case (size === "m"):
            return fonts.h2({style: style});
        case (size === "s"):
            return fonts.h3({style: style});
    }

}

function getColor({type}: HeaderProps) {
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

export const Header = ({size, type, style, children}: HeaderProps) => {
    switch (size) {
        case "l":
            return <HeaderStyled size={size} type={type} style={style} as="h1">{children}</HeaderStyled>;
        case undefined:
        case "m":
            return <HeaderStyled size={size} type={type} style={style} as="h2">{children}</HeaderStyled>;
        case "s":
            return <HeaderStyled size={size} type={type} style={style} as="h3">{children}</HeaderStyled>;
    }
};

export const HeaderStyled = styled.h1<HeaderProps>`
  font: ${props => getFont({size: props.size, style: props.style})};
  color: ${props => getColor({type: props.type})};
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;
