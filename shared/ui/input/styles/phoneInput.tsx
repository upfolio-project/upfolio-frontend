import {InputAdornment} from "@mui/material";
import {useIMask} from "react-imask";
import styled from "styled-components";
import {borders, colors, fonts} from "@/styles/variables";
import {DefaultInput, InputProps} from "./inputBase";

const PhoneStart = () => (
    <InputAdornment position="start">
        +7
    </InputAdornment>
);

export const PhoneInput = (props: InputProps) => {
    function setRefs(element: HTMLInputElement) {
        ref && ((ref as any).current = element);
        props.inputRef && ((props.inputRef.current as any) = element);
    }

    const {
        ref,
        unmaskedValue,
    } = useIMask({mask: "000-000-00-00"});

    return (
        <PhoneInputStyled
            {...props}
            InputProps={{
                inputRef: setRefs,
                startAdornment: <PhoneStart/>
            }}
            onChange={undefined}
            onInput={() => props.onChange && props.onChange(unmaskedValue)}
            helperText={props.hint}
            label={props.label}
            placeholder={props.placeholder}
            type="default"
            variant="outlined"
        />
    );
};

export const PhoneInputStyled = styled(DefaultInput)`
  & div p {
    margin: 0;
    font: ${fonts.mn} !important;
    color: ${colors.colorSecondary};
  }

  & > div > div {
    width: max-content;
    margin-right: 13px;
  }

  & > div {
    &:hover fieldset, &:focus fieldset {
      border: ${borders.width2px(colors.colorAccent50)} !important;
    }
  }

  & input {
    padding-left: 0;
  }
`;
