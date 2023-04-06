import styled from "styled-components";
import {fonts, colors} from "@/styles/variables";
import React from "react";


interface TitleProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "type"> {
    type?: "default" | "defaultLight" | "accent" | "accentLight";
    children?: React.ReactNode | React.ReactNode[];
}

function getColor({type}: TitleProps) {
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
    }
}

export const Title = ({type, children}: TitleProps) => {
    return <TitleStyled type={type}>{children}</TitleStyled>;
};

export const TitleStyled = styled.h1<TitleProps>`
  font: ${fonts.title()};
  color: ${props => getColor({type: props.type})};
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  text-transform: uppercase;
`;
