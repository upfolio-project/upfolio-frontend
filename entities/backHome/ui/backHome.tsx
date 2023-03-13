import React from "react";
import {Button} from "@/shared/ui/button";
import styled from "styled-components";

interface BackHomeProps {
    children?: React.ReactNode | React.ReactNode[]
    url?: string
}

export const BackHome = ({children, url}: BackHomeProps) => {
    return <StyledButton as="a" href={url ? url : '/'}>{children}</StyledButton>;
};

const StyledButton = styled(Button)`
  text-decoration: none
`;