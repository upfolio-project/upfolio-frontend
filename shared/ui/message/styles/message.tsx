import styled from "styled-components";
import {Alert, AlertProps, Box, IconButton, LinearProgress} from "@mui/material";
import {ReactNode, useEffect, useState} from "react";
import {borders, colors, shadows, sizes} from "@/shared/styles";
import {Text} from "@/shared/ui/text";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface MessageProps extends Omit<AlertProps, "title" | "severity"> {
    title?: ReactNode | ReactNode[]
    description: ReactNode | ReactNode[]
    severity?: "error" | "success"
}

interface InnerMessageProps {
    type?: "error" | "success"
}

export const Message = ({title, description, severity}: MessageProps) => {
    const [progress, setProgress] = useState(0);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let interval: any;
        if (progress !== 100) {
            interval = setInterval(() => setProgress(progress + 1), 50);
        }
        return () => clearInterval(interval);
    }, [progress]);
    return (
        <Wrapper
            style={{transform: (progress === 100 || progress === 0 || open) ? "translateX(calc(100vw + 30px))" : " translateX(0)"}}>
            <AlertStyled severity={severity} icon={getIcon({type: severity})} action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <CloseIcon sx={{color: getColor({type: severity}), fontSize: sizes.s}}/>
                </IconButton>
            }>
                <Text size="m">{title}</Text>
                <Text size="s">{description}</Text>
            </AlertStyled>
            <LinearProgressStyled type={severity} variant="determinate" value={progress}/>
        </Wrapper>
    );
};

function getColor({type}: InnerMessageProps) {
    switch (type) {
        case "error":
            return colors.colorSecondary;
        default:
            return colors.colorAccent;
    }
}

function getIcon({type}: InnerMessageProps) {
    switch (type) {
        case "error":
            return <ErrorIcon sx={{color: getColor({type}), fontSize: sizes.s}}/>;
        default:
            return <CheckCircleIcon sx={{color: getColor({type}), fontSize: sizes.s}}/>;
    }
}

const Wrapper = styled(Box)<InnerMessageProps>`
  display: flex;
  position: fixed;
  z-index: 2;
  flex-direction: column;
  max-width: max-content;
  bottom: 4vmin;
  right: 4vmin;
  border-radius: ${borders.radius10};
  box-shadow: ${shadows.accentShadow};
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.35);
`;

const AlertStyled = styled(Alert)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;


const LinearProgressStyled = styled(LinearProgress)<InnerMessageProps>`
  width: 100%;

  & {
    background-color: white;

    span {
      background-color: ${props => getColor(props)};
    }
  }
`;