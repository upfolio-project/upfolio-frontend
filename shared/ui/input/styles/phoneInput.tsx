import {InputAdornment} from "@mui/material";
import {useIMask} from "react-imask";
import styled from "styled-components";
import {borders, colors, fonts} from "@/shared/styles";
import {DefaultInput, InputProps} from "./baseInput";
import {Text} from "@/shared/ui/text";

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
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                inputRef: setRefs,
                startAdornment: <PhoneStart/>,
                inputProps: {
                    inputMode: "tel",
                    autoComplete: "tel-national",
                    type: "tel"
                }

            }}
            onChange={undefined}
            onInput={() => props.onChange && props.onChange(unmaskedValue)}
            helperText={<Text size="s" type="defaultLight" as="span">{props.hint}</Text>}
            label={<Text size="m">{props.label}</Text>}
            placeholder={props.placeholder}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            variant="outlined"
        />
    );
};

export const PhoneInputStyled = styled(DefaultInput)`
  width: 100%;
  overflow: hidden;
  
  & div p {
    margin: 0;
    font: ${fonts.m()} !important;
    color: ${colors.colorSecondary};
  }

  & > div > div {
    width: max-content;
    margin-right: 13px;
  }

  & > div {
    background-color: ${colors.colorDominant};
    
    &:hover fieldset, &:focus fieldset {
      border: ${borders.width2px(colors.colorAccent50)} !important;
    }

    overflow: hidden;
    border-radius: ${borders.radius10};
  }

  & input {
    padding-left: 0 !important;
    ::placeholder {
      color: ${colors.colorSecondary50}
    }
  }
`;
