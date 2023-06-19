import {Box} from "@mui/material";
import {useEffect, useRef} from "react";
import {
    useConfirmPhoneOTPMutation,
    useGetRegisterTokenQuery
} from "@/shared/api/auth/register";
import {useRouter} from "next/router";
import {FormFeature} from "@/features/formFeature";
import {Header, Input, Button, Message, Text, Link, sizes} from "@upfolio-project/upfolio-ui";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {useGetMe} from "@/shared/hooks";

export const RegisterOTPWidget = () => {
    useEffect(() => {
        if (status === "fulfilled" && registerData?.success) {
            router.push("/register/finish");
        }
    });

    const OTPHandler = () => {
        registerOTPHandler({
            registerToken: registerToken?.token || "",
            code: String(OTPRef?.current?.value)
        });
    };

    const {data: registerToken} = useGetRegisterTokenQuery({});
    const router = useRouter();
    const OTPRef = useRef<HTMLInputElement>(null);
    const [registerOTPHandler, {data: registerData, status, isError, error: regError}] = useConfirmPhoneOTPMutation();
    const error = regError as any;

    const {me, loading} = useGetMe();
    if (loading || me) return <></>;
    return (
        <FormFeature onSubmit={(e) => {
            e.preventDefault();
            OTPHandler();
        }
        }>
            {isError && <Message title="Произошла ошибка"
                                 description={GetErrorDescription(error?.data?.text)}
                                 severity="error"/>}
            <Header size="s">Введите код подтверждения</Header>
            <Box display="flex" flexDirection="column" gap={sizes.s} width="320px">
                <Input inputRef={OTPRef} label="Код подтверждения" placeholder="xxxx"/>
                <Button type="accent" buttonType="submit" width="container">Отправить</Button>
            </Box>
            <Box display="flex" gap={sizes.xs} justifyContent="center">
                <Text type="defaultLight" size="s">Не пришёл код?</Text>
                <Link href="/login" type="accent" size="s">Отправить повторно</Link>
            </Box>
        </FormFeature>
    );
};