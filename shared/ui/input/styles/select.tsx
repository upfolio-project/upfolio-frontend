import {FormControl, InputLabel, MenuItem, Select as MUISelect} from "@mui/material";
import React, {Ref, useState} from "react";
import styled from "styled-components";
import {borders, colors, fonts, shadows} from "@/shared/styles";

interface Item<V> {
    content: React.ReactNode;
    key: string | number;
    value: V;
}

interface SelectProps<V> {
    items: Item<V>[];
    id: string;
    label: string;
    inputRef?: Ref<HTMLInputElement> | undefined;
    defaultValue?: V;
}

const Select = <V,>({items, id, label, inputRef, defaultValue}: SelectProps<V>) => {
    const [value, changeValue] = useState<V | string | number>(defaultValue || items[0].value);
    return (
        <FormControlStyled fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <SelectStyled
                inputRef={inputRef}
                value={value}
                onChange={(e) => changeValue(e?.target?.value as V || defaultValue || items[0].value)}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: colors.colorDominant,
                            borderRadius: borders.radius10,
                            shadows: shadows.defaultShadow,
                            marginTop: "8px"
                        },
                    },
                }}
                labelId={id}
            >
                {items.map(item => <MenuItemStyled value={item.value as string} key={item.key}>{item.content}</MenuItemStyled>)}
            </SelectStyled>
        </FormControlStyled>
    );
};

const MenuItemStyled = styled(MenuItem)`
  font: ${fonts.m()};
  transition: .1s all;
  
  &:hover {
    background-color: ${colors.colorSecondary05};
  }

  &[aria-selected="true"] {
    background-color: ${colors.colorAccent20};
  }

`;

const SelectStyled = styled(MUISelect)`
  width: 100%;
  
  & > div {
    border: ${borders.width2px(colors.colorAccent)} !important;
    border-radius: ${borders.radius10};
    transition: all .3s;
    height: 40px;
  }
  
  & div {
    height: 40px !important;
    display: flex;
    align-items: center;
    padding: 0 18px;
    font: ${fonts.m()};
    
  }
`;

const FormControlStyled = styled(FormControl)`
  & label {
    transition: color .3s;
    display: block;
    position: unset;
    margin: 0 0 5px;
    transform: none;
    color: ${colors.colorSecondary} !important;
    font: ${fonts.m()};


  }

  & fieldset {
    border: none;
  }

  &:hover > div> div, &:focus-visible > div > div, &:focus-within > div > div {
    border: ${borders.width2px(colors.colorAccent50)} !important;
    border-radius: ${borders.radius10} !important;
  }
`;

export {Select};