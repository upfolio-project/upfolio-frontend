import styled from "styled-components";
import Link, {LinkProps} from "next/link";
import React from "react";
import {Text, TextProps} from "@/shared/ui/text";
import {colors} from "@/styles/variables";

interface InnerLinkProps extends
    Omit<LinkProps, "onClick" | "as" | "InnerLinkProps" | "onMouseEnter" | "onTouchStart">,
    Omit<TextProps, "onClick" | "as" | "InnerLinkProps" | "onMouseEnter" | "onTouchStart"> {
    children: React.ReactNode | React.ReactNode[]
    className?: string
    as?: "p" | "span"
}

export const InnerLink = ({href, children, className, size, style, type, as}: InnerLinkProps) => {
    return (
        <LinkStyled href={href} className={className}>
            <Text size={size} style={style} type={type} as={as}>{children}</Text>
        </LinkStyled>
    );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: block;
  width: max-content;
  color: ${colors.colorTransparent} !important;
  
  & p {
    width: max-content;
  }
  
  &, & * {
    transition: all .3s;
  }
  
  &:hover {
    color: ${colors.colorAccent} !important;
    
    & p, & span {
      color: ${colors.colorAccent} !important;
      
    }
  }
`;