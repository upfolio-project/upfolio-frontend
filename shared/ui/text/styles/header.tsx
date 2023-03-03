import styled from "styled-components";
import {fonts, colors} from "@/styles/variables";


interface HeaderProps {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "success" | "successLight";
    style?: "normal" | "italic" | "bold";
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

export const Header = styled.p<HeaderProps>`
  font: ${props => getFont({size: props.size, style: props.style})};
  color: ${props => getColor({type: props.type})};
`;
