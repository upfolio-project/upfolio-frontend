import {DefaultInput, InputProps} from "./baseInput";
import {PhoneInput} from "./phoneInput";
import {Text} from "@/shared/ui/text";


export const InputStyled = (props: InputProps) => {
    switch (props.type) {
        case "default":
        case undefined:
        case null: {
            return <DefaultInput defaultValue={props.defaultValue}
                                 ha={props.hintAlign}
                                 onChange={(event) => props.onChange && props.onChange(event.target.value)}
                                 type={props.type}
                                 helperText={<Text size="s" type="defaultLight" as="span">{props.hint}</Text>}
                                 label={<Text size="m">{props.label}</Text>}
                                 placeholder={props.placeholder}
                                 variant="outlined"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 InputProps={{
                                     autoComplete: props.autocomplete,
                                     inputRef: props.inputRef
                                 }}
            />;
        }
        case ("phone"): {
            return <PhoneInput
                onChange={props.onChange}
                inputRef={props.inputRef}
                type={props.type}
                hint={props.hint}
                label={props.label}
                placeholder={props.placeholder}
            />;
        }
        case ("password"): {
            return <DefaultInput
                ha={props.hintAlign}
                onChange={(event) => props.onChange && props.onChange(event.target.value)}
                type="password"
                helperText={<Text size="s" type="defaultLight" as="span">{props.hint}</Text>}
                label={<Text size="m">{props.label}</Text>}
                placeholder={props.placeholder}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    autoComplete: props.autocomplete,
                    inputRef: props.inputRef
                }}
            />;
        }
        default:
            return <></>;
    }
};




