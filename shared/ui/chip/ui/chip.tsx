import {Chip as MUIChip} from "@mui/material";
import styled from "styled-components";
import {fonts} from "@/styles/variables";

interface ChipProps {
    children: string
    onDelete: (label: string) => void
}

const Chip = ({children, onDelete}: ChipProps) => {
    return (
        <ChipStyled
            label={children}
            onDelete={onDelete ? () => onDelete(children) : undefined}
        />
    );
};

const ChipStyled = styled(MUIChip)`
  height: 30px;
  font: ${fonts.m()}
    
`;

export {Chip};