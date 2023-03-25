import {DatePicker as MUIDatePicker} from "@mui/x-date-pickers";
import styled from "styled-components";
import {borders, colors, fonts} from "@/styles/variables";
import dayjs from 'dayjs';
import {Ref, useState} from "react";

interface DatePickerProps {
    label?: string;
    defaultValue?: string;
    inputRef?: Ref<HTMLInputElement> | undefined;
}

const DatePicker = (props: DatePickerProps) => {
    const [date, changeDate] = useState<string>(props.defaultValue || "");

    function onChange(e: any) {
        const newDate = `${e["$y"]}-${e["$M"] + 1}-${e["$D"]}`;
        changeDate(newDate);
    }

    return (
        <div>
            <HiddenInput ref={props.inputRef} value={date} onChange={() => {}}/>
            <DatePickerStyled
                label={props.label}
                value={dayjs(new Date(date))}
                onChange={(e) => onChange(e)}/>
        </div>
    );
};

const HiddenInput = styled.input`
  display: none;
  flex: 0;
`;

const DatePickerStyled = styled(MUIDatePicker)`
  & label {
    transition: color .3s;
    display: block;
    position: unset;
    margin: 0 0 5px;
    transform: none;
    color: ${colors.colorSecondary} !important;
    font: ${fonts.m()};
  }

  & > div {
    border: ${borders.width2px(colors.colorAccent)};
    border-radius: ${borders.radius10};
    transition: all .3s;
  }

  &:hover > div, &:focus-visible > div, &:focus-within > div {
    border: ${borders.width2px(colors.colorAccent50)};
  }

  & fieldset {
    border: none;
  }

  & input {
    font: ${fonts.m()};
    height: 40px;
    padding: 0 18px;
  }

`;

export {DatePicker};