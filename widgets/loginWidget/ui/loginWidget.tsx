import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

import {Box} from "@mui/material";

import {useLoginByPasswordMutation} from "@/shared/api/auth/login";
import {FormFeature} from "@/features/formFeature";
import {useAppSelector} from "@/shared/hooks";

import {Header, Text, Input, Button, Link, Message, sizes} from "@upfolio-project/upfolio-ui";


export const LoginWidget = () => {
    useEffect(() => {
        if (status === "fulfilled" && loginData?.token) {
            router.push("/me");
        }
    });

    const loginHandler = () => {
        return loginByPassword({
            password: String(passwordRef?.current?.value),
            phoneNumber: String(phoneRef?.current?.value),
        });
    };

    const passwordRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const error = useAppSelector(state => state.login.error);
    const router = useRouter();
    const [loginByPassword, {data: loginData, status, isError}] = useLoginByPasswordMutation();

    return (
        <FormFeature onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
        }
        }>
            {isError && <Message title="Произошла ошибка" description={error} severity="error"/>}
            <Header size="s">Войдите в свой аккаунт</Header>
            <Text type="defaultLight" align="center">Добро пожаловать!<br/>Пожалуйста, введите свои данные.</Text>
            <Box display="flex" flexDirection="column" gap={sizes.s} width="320px">
                <Input inputRef={phoneRef} type="phone" label="Телефон" placeholder="929-789-98-88"/>
                <Input inputRef={passwordRef} type="password" label="Пароль"
                       hint={<Link size="s" href="" type="defaultLight" as="span">Забыли пароль?</Link>}
                       placeholder="********" hintAlign="right"/>
                <Button type="accent" buttonType="submit"
                        width="container">Войти</Button>
            </Box>
            <Box display="flex" gap={sizes.xs}>
                <Text type="defaultLight" size="s">У вас нет аккаунта?</Text>
                <Link href="/register/enterPhone" type="accent" size="s">Регистрация</Link>
            </Box>
        </FormFeature>
    );
};