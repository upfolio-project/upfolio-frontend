import styled from "styled-components";
import Link, {LinkProps} from "next/link";
import React from "react";
import {Text, TextProps} from "@/shared/ui/text";
import {colors} from "@/styles/variables";

interface InnerLinkProps extends LinkProps, TextProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

export const InnerLink = ({href, children, className, size, style, type}: InnerLinkProps) => {
    return (
        <LinkStyled href={href} className={className}>
            <Text size={size} style={style} type={type}>{children}</Text>
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
    text-decoration: underline;
    color: ${colors.colorAccent} !important;
    
    & p {
      color: ${colors.colorAccent} !important;
      
    }
  }
`;