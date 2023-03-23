import {Box, Container} from "@mui/material";
import styled from "styled-components";
import {Header, Text} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {borders, shadows} from "@/styles/variables";
import {Button} from "@/shared/ui/button";
import {Link} from "@/shared/ui/link";
import {useEffect, useRef} from "react";
import {
    useConfirmPhoneOTPMutation,
    useGetRegisterTokenQuery
} from "@/shared/api/auth/register";
import {useRouter} from "next/router";

const ContainerStyled = styled(Container)`
  max-width: 451px;
  max-height: 465px;
  box-sizing: content-box;
`;

const Card = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 40px;
  width: 100%;
  height: 100%;
  box-shadow: ${shadows.defaultShadow};
  border-radius: ${borders.radius10};
`;

export const RegisterOTPWidget = () => {
    useEffect(() => {
        if (registerData?.status === "fulfilled" && registerData?.data?.success) {
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
    const [registerOTPHandler, registerData] = useConfirmPhoneOTPMutation();

    return (
        <ContainerStyled>
            <Card onSubmit={(e) => {
                e.preventDefault();
                OTPHandler();
            }
            }>
                <Header size="s">Введите код подтверждения</Header>
                <Box display="flex" flexDirection="column" gap="20px" width="320px">
                    <Input inputRef={OTPRef} label="Код подтверждения" placeholder="xxxx"/>
                    <Button type="success" buttonType="submit" width="container">Отправить</Button>
                </Box>
                <Box display="flex" gap="10px">
                    <Text type="defaultLight" size="s">Не пришёл код?</Text>
                    <Link href="/login" type="success" size="s">Отправить повторно</Link>
                </Box>
            </Card>
        </ContainerStyled>
    );
};