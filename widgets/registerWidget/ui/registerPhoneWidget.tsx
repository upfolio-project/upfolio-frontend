import {Box, Container} from "@mui/material";
import styled from "styled-components";
import {Header, Text} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {borders, shadows} from "@/styles/variables";
import {Button} from "@/shared/ui/button";
import {Link} from "@/shared/ui/link";
import {useEffect, useRef} from "react";
import {useCommenceByPhoneNumberMutation, useGetRegisterTokenQuery} from "@/shared/api/auth/register";
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
        <ContainerStyled>
            <Card onSubmit={(e) => {
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
            </Card>
        </ContainerStyled>
    );
};