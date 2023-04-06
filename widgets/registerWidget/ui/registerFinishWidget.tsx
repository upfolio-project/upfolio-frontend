import {Box} from "@mui/material";
import {Header} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {useEffect, useRef} from "react";
import {
    useGetRegisterTokenQuery, useFinishMutation
} from "@/shared/api/auth/register";
import {useRouter} from "next/router";
import {FormFeature} from "@/features/formFeature";
import {sizes} from "@/shared/styles";


export const RegisterFinishWidget = () => {
    useEffect(() => {
        if (registerData?.status === "fulfilled" && registerData?.data?.token) {
            router.push("/me");
        }
    });

    const finishHandler = () => {
        registerFinishHandler({
            registerToken: registerToken?.token || "",
            password: String(passwordRef?.current?.value),
            firstName: String(firstNameRef?.current?.value),
            lastName: String(lastNameRef?.current?.value),
        });
    };

    const formDataCheck = () => {
        if (String(passwordRef?.current?.value) !== String(passwordAgainRef?.current?.value)) {
            return false;
        }
        // other checks on form layer
        return true;
    };

    const {data: registerToken} = useGetRegisterTokenQuery({});
    const router = useRouter();
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordAgainRef = useRef<HTMLInputElement>(null);

    const [registerFinishHandler, registerData] = useFinishMutation();

    return (
        <FormFeature onSubmit={(e) => {
            e.preventDefault();
            if (formDataCheck()) finishHandler();
        }
        }>
            <Header size="s">Введите свои данные</Header>
            <Box display="flex" flexDirection="column" gap={sizes.s} width="320px">
                <Input inputRef={firstNameRef} label="Имя" placeholder="Иван"/>
                <Input inputRef={lastNameRef} label="Фамилия" placeholder="Петров"/>
                <Input inputRef={passwordRef} type="password" label="Пароль"
                       hint="Должно быть не менее 8 символов"
                       placeholder="********" autocomplete="new-password"/>
                <Input inputRef={passwordAgainRef} type="password" label="Повторите пароль"
                       placeholder="********" hintAlign="right" autocomplete="new-password"/>
                <Button type="accent" buttonType="submit"
                        width="container">Зарегистрироваться</Button>
            </Box>
        </FormFeature>
    );
};