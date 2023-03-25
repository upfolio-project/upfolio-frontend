import {InputProps} from "@/shared/ui/input/styles/baseInput";
import {Box} from "@mui/material";
import {Chip} from "@/shared/ui/chip";
import {Text} from "@/shared/ui/text";
import styled from "styled-components";
import {borders, colors, fonts} from "@/styles/variables";
import {MutableRefObject, useEffect, useRef, useState, KeyboardEvent} from "react";


interface ChipInputProps extends Omit<InputProps, "inputRef"> {
    chips: string[];
    inputRef?: MutableRefObject<{ value: string[] | null } | null>;
    maxCount?: number
}

const ChipInput = (props: ChipInputProps) => {
    const [chips, changeChips] = useState(props.chips);
    const inputRef = useRef<HTMLInputElement>(null);

    function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            const inputData = inputRef?.current?.value;
            if (!inputData) return;
            if (chips.includes(inputData)) return;
            if (props.maxCount && chips.length >= props.maxCount) return;
            changeChips([...chips, inputData]);
            inputRef.current.value = "";
        }
    }

    function onDelete(chip: string) {
        changeChips(chips.filter(c => c !== chip));
    }

    useEffect(() => {
        if (props.inputRef) {
            props.inputRef.current = {value: chips};
        }
    }, [chips, props.inputRef]);

    return (
        <InputContainer>
            <Text size="m">{props.label}</Text>
            <TextFieldStyled
                width="100%"
                display="flex"
                flexWrap="wrap"
                gap="8px"
            >
                {chips.map(chip => <Chip key={chip} onDelete={onDelete}>{chip}</Chip>)}
                <ChipPrompt placeholder={props.placeholder} onKeyDown={(e) => onKeyDown(e)} ref={inputRef}/>
            </TextFieldStyled>
        </InputContainer>
    );
};


const InputContainer = styled.label`
  & p {
    margin-bottom: 4px;
  }
  
  &:hover > div, &:focus-within > div {
    border: ${borders.width2px(colors.colorAccent50)};
  }

`;


const TextFieldStyled = styled(Box)`
  transition: all .3s;
  border: ${borders.width2px(colors.colorAccent)};
  border-radius: ${borders.radius10};
  padding: 18px;
`;

const ChipPrompt = styled.input`
  font: ${fonts.m()};
  width: max-content;
  min-width: 0;
  display: block;
  border: none;
  outline: none;
  height: 30px;

`;

export {ChipInput};