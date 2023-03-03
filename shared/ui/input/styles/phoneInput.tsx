import {InputAdornment} from "@mui/material";
import {useIMask} from "react-imask";
import styled from "styled-components";
import {borders, colors, fonts} from "@/styles/variables";
import {DefaultInput, InputProps} from "./inputBase";
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
                startAdornment: <PhoneStart/>
            }}
            onChange={undefined}
            onInput={() => props.onChange && props.onChange(unmaskedValue)}
            helperText={<Text size="s" type="defaultLight">{props.hint}</Text>}
            label={<Text size="m">{props.label}</Text>}

            placeholder={props.placeholder}
            type="default"
            variant="outlined"
        />
    );
};

export const PhoneInputStyled = styled(DefaultInput)`
  width: 100%;
  
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
    &:hover fieldset, &:focus fieldset {
      border: ${borders.width2px(colors.colorAccent50)} !important;
    }
  }

  & input {
    padding-left: 0 !important;
    ::placeholder {
      color: ${colors.colorSecondary50}
    }
  }
`;
