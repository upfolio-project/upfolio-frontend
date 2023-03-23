import {Box} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Link} from "@/shared/ui/link";
import React, {useEffect, useRef} from "react";
import {useCommenceByPhoneNumberMutation, useGetRegisterTokenQuery} from "@/shared/api/auth/register";
import {useRouter} from "next/router";
import {FormFeature} from "@/features/formFeature";

export const RegisterPhoneWidget = () => {
    useEffect(() => {
        if (registerData?.status === "fulfilled" && registerData?.data?.success) {
            router.push("/register/enterOTP");
        }
    });

    const loginHandler = () => {
        registerPhoneHandler({
            registerToken: registerToken?.token || "",
            phoneNumber: String(phoneRef?.current?.value)
        });
    };

    const {data: registerToken} = useGetRegisterTokenQuery({});
    const router = useRouter();
    const phoneRef = useRef<HTMLInputElement>(null);
    const [registerPhoneHandler, registerData] = useCommenceByPhoneNumberMutation();

    return (
        <FormFeature onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
        }
        }>
            <Header size="s">Создайте аккаунт</Header>
            <Text type="defaultLight" align="center">Добро пожаловать!<br/>Пожалуйста, введите свои данные.</Text>
            <Box display="flex" flexDirection="column" gap="20px" width="320px">
                <Input inputRef={phoneRef} type="phone" label="Телефон" placeholder="929-789-98-88"/>
                <Button type="success" buttonType="submit"
                        width="container">Получить СМС-код</Button>
            </Box>
            <Box display="flex" gap="10px">
                <Text type="defaultLight" size="s">У вас уже есть аккаунт?</Text>
                <Link href="/login" type="success" size="s">Вход</Link>
            </Box>
        </FormFeature>
    );
};