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
    children?: React.ReactNode
}


export const InnerCheckbox = ({size, type, style, children, ...props}: CheckboxProps) => {
    return (
        <StyledCheckbox>
            <input
                {...props}
                type="checkbox"/>
            <Text size={size} type={type} style={style}><span/>{children || <wbr/>}</Text>
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
    margin-left: -1.3em;
    transition: all .3s;
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
    box-sizing: border-box;
  }
  
  span:before {
    transition: all .3s;
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

  span:after {
    transition: outline-color .3s;
    content: ' ';
    box-sizing: border-box;
    display: block;
    position: absolute;
    z-index: -1;
    width: calc(.9em - 2px);
    height: calc(.9em - 2px);
    border-radius: 50%;
    margin: 0;
    left: 0;
    top: 0;
    outline: transparent;
  }

  input:checked:focus-visible +* span:after {
    outline: ${colors.colorAccent20} solid calc(.25 * .9em + 2px);
  }
  
  input:focus-visible +* span:after {
    outline: ${colors.colorSecondary20} solid calc(.25 * .9em + 2px);
  }

  input:checked +* span {
    border: ${borders.width1px(colors.colorAccent)};
    background-color: ${colors.colorAccent};
  }

  input:checked +* span:before {
    opacity: 1;
  }
  
  input:disabled:checked +* span {
    border: ${borders.width1px(colors.colorTransparent)};
    background-color: ${colors.colorSecondary50};
  }

  p {
    padding-left: 1.3em;
  }
`;