import {Box, Container} from "@mui/material";
import styled from "styled-components";
import {Header, Text} from "@/shared/ui/text";
import {Input} from "@/shared/ui/input";
import {borders, shadows} from "@/styles/variables";
import {Button} from "@/shared/ui/button";
import {Link} from "@/shared/ui/link";
import {useRef} from "react";
import {useLoginByPasswordMutation} from "@/shared/api/auth/login";

const ContainerStyled = styled(Container)`
  max-width: 451px;
  max-height: 465px;
  border-radius: ${borders.radius10};
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre;
  gap: 20px;
  padding: 40px;
  width: 100%;
  height: 100%;
  box-shadow: ${shadows.defaultShadow};
`;

export const LoginWidget = () => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [loginByPassword] = useLoginByPasswordMutation();
    return (
        <ContainerStyled>
            <Card>
                <Header size="s">Войдите в свой аккаунт</Header>
                <Text type="defaultLight" align="center">Добро пожаловать!<br/>Пожалуйста, введите свои данные.</Text>
                <Box display="flex" flexDirection="column" gap="20px">
                    <Input inputRef={phoneRef} type='phone' label='Телефон' placeholder='929-789-98-88'/>
                    <Input inputRef={passwordRef} type='password' label='Пароль' hint='Забыли пароль?'
                           placeholder='********'/>
                    <Button onClick={() => loginByPassword({
                        password: String(passwordRef?.current?.value),
                        phoneNumber: String(phoneRef?.current?.value),
                    })} type='success'
                            width="container">Войти</Button>
                </Box>
                <Box display="flex" gap="10px">
                    <Text type="defaultLight">У вас нет аккаунта?</Text>
                    <Link href='#' type='success'>Регистрация</Link>
                </Box>
            </Card>
        </ContainerStyled>
    );
};