import styled from "styled-components";
import {Text} from "@/shared/ui/text";
import {borders, colors} from "@/styles/variables";
import check from "./../static/check.svg";
import React from "react";

interface CheckboxProps extends
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size" | "style" | "type"> {
    size?: "s" | "m" | "l";
    type?: "default" | "defaultLight" | "success" | "successLight";
    style?: "normal" | "italic" | "bold";
}


export const InnerCheckbox = ({size, type, style, ...props}: CheckboxProps) => {
    return (
        <StyledCheckbox>
            <input
                {...props}
                type="checkbox"/>

            <Text size={size} type={type} style={style}><span/>text</Text>
        </StyledCheckbox>
    );
};

const StyledCheckbox = styled.label`
  position: relative;
  display: block;

  input {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0 0 0 0);
  }

  span {
    margin-left: -1.1em;
    transition: border .3s;
    position: absolute;
    display: block;
    height: .9em;
    width: .9em;
    aspect-ratio: 1 / 1;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    background-color: ${colors.colorDominant};
    border: ${borders.width1px(colors.colorSecondary50)};
    border-radius: ${borders.radius4};
    
  }
  
  span:before {
    transition: .3s all;
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${check.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: calc(100% - 4px);
    opacity: 0;
  }

  input:focus-visible +* span {
    outline: 2px solid red;
  }

  input:checked +* span {
    border: ${borders.width1px(colors.colorAccent)};
  }

  input:checked +* span:before {
    opacity: 1;
  }

  p {
    padding-left: 1.1em;
  }
`;