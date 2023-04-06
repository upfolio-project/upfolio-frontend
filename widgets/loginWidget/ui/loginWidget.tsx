import {Box} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Link} from "@/shared/ui/link";
import {useEffect, useRef} from "react";
import {useLoginByPasswordMutation} from "@/shared/api/auth/login";
import {FormFeature} from "@/features/formFeature";
import {useRouter} from "next/router";
import {sizes} from "@/styles/variables";

export const LoginWidget = () => {
    useEffect(() => {
        if (loginData?.status === "fulfilled" && loginData?.data?.token) {
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

    const router = useRouter();
    const [loginByPassword, loginData] = useLoginByPasswordMutation();

    return (
        <FormFeature onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
        }
        }>
            <Header size="s">Войдите в свой аккаунт</Header>
            <Text type="defaultLight" align="center">Добро пожаловать!<br/>Пожалуйста, введите свои данные.</Text>
            <Box display="flex" flexDirection="column" gap={sizes.s} width="320px">
                <Input inputRef={phoneRef} type="phone" label="Телефон" placeholder="929-789-98-88"/>
                <Input inputRef={passwordRef} type="password" label="Пароль"
                       hint={<Link size="s" href="" type="defaultLight" as="span">Забыли пароль?</Link>}
                       placeholder="********" hintAlign="right"/>
                <Button type="success" buttonType="submit"
                        width="container">Войти</Button>
            </Box>
            <Box display="flex" gap={sizes.xs}>
                <Text type="defaultLight" size="s">У вас нет аккаунта?</Text>
                <Link href="/register/enterPhone" type="success" size="s">Регистрация</Link>
            </Box>
        </FormFeature>
    );
};