import styled from "styled-components";
import {fonts, colors} from "@/styles/variables";


interface TextProps {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "success" | "successLight";
    style?: "normal" | "italic" | "bold";
}

function getFont({size, style}: TextProps) {
    style = !style ? "normal" : style;
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

export const Text = styled.p<TextProps>`
  font: ${props => getFont({size: props.size, style: props.style})};
  color: ${props => getColor({type: props.type})};
`;
