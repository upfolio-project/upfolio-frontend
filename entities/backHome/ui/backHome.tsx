import React from "react";
import {Button} from "@/shared/ui/button";
import styled from "styled-components";

interface BackHomeProps {
    children?: React.ReactNode | React.ReactNode[]
}

export const BackHome = ({children}: BackHomeProps) => {
    return <StyledButton as="a" href="/">{children}</StyledButton>;
};

const StyledButton = styled(Button)`
  text-decoration: none
`;