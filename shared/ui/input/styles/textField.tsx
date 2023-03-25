import {Text} from "@/shared/ui/text";
import {DefaultInput, InputProps} from "./baseInput";
import styled from "styled-components";
import {borders, colors, fonts} from "@/styles/variables";

const TextField = (props: InputProps) => {
    return (
        <TextFieldStyled defaultValue={props.defaultValue}
                         className={props.className}
                         ha={props.hintAlign}
                         onChange={(event) => props.onChange && props.onChange(event.target.value)}
                         multiline
                         helperText={<Text size="s" type="defaultLight" as="span">{props.hint}</Text>}
                         label={<Text size="m">{props.label}</Text>}
                         placeholder={props.placeholder}
                         variant="outlined"
                         InputLabelProps={{
                             shrink: true,
                         }}
                         InputProps={{
                             autoComplete: props.autocomplete,
                             inputRef: props.inputRef,
                             startAdornment: props?.before,
                         }}
        />
    );
};

const TextFieldStyled = styled(DefaultInput)`
  div {
    transition: all .3s;
    border: ${borders.width2px(colors.colorAccent)};
    padding: 0;
  }
  
  div:hover, div:focus-visible, div:focus-within {
    border: ${borders.width2px(colors.colorAccent50)};
  }

  & textarea {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 9px 18px;
    font: ${fonts.m()};
    border: none;
    resize: vertical;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 1 !important;
      color: ${colors.colorSecondary50};
    }

    :-ms-input-placeholder {
      opacity: 1 !important;
      color: ${colors.colorSecondary50};
    }
  }

  & fieldset {
    border: none;
  }
`;

export {TextField};