import styled from "styled-components";
import {Alert, AlertProps, AlertTitle} from "@mui/material";
import {ReactNode} from "react";

interface MessageProps extends Omit<AlertProps, "title"> {
    title?: ReactNode | ReactNode[]
    description: ReactNode | ReactNode[]
}

export const Message = ({severity, title, description}: MessageProps) => {
    return (
        <MessageStyled severity={severity}>
            {title && <TitleStyled>{title}</TitleStyled>}
            {description}
        </MessageStyled>
    );
};

const MessageStyled = styled(Alert)`
`;

const TitleStyled = styled(AlertTitle)`
`;