import {DefaultInput, InputProps} from "./inputBase";
import {PhoneInput} from "./phoneInput";
import {Text} from "@/shared/ui/text";


export const InputStyled = (props: InputProps) => {
    switch (props.type) {
        case "default":
        case undefined:
        case null: {
            return <DefaultInput
                {...props}
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
                    inputRef: props.inputRef
                }}
            />;
        }
        case ("phone"): {
            return <PhoneInput
                {...props}
                onChange={props.onChange}
                type={props.type}
                hint={props.hint}
                label={props.label}
                placeholder={props.placeholder}
            />;
        }
        case ("password"): {
            return <DefaultInput
                {...props}
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
                    inputRef: props.inputRef
                }}
            />;
        }
        default:
            return <></>;
    }
};



