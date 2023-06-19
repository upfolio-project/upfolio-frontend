import {Box} from "@mui/material";
import React, {useEffect, useRef} from "react";
import {useCommenceByPhoneNumberMutation, useGetRegisterTokenQuery} from "@/shared/api/auth/register";
import {useRouter} from "next/router";
import {FormFeature} from "@/features/formFeature";
import {Header, Input, Button, Message, Text, Link, sizes} from "@upfolio-project/upfolio-ui";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {useGetMe} from "@/shared/hooks";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    & > img {
      width: 400px;
      height: 230px;
    }
  }

  @media screen and (max-width: 1023px) {
    & > img {
      width: 330px;
      height: 190px;
    }
  }

  @media screen and (max-width: 833px) {
    display: none;
  }
`;

const ImageContainerInForm = styled(Box)`
  display: none;
  justify-content: center;
  width: 100%;
  
  @media screen and (min-width: 1024px) {
    & > img {
      width: 400px;
      height: 230px;
    }
  }

  @media screen and (max-width: 1023px) {
    & > img {
      width: 330px;
      height: 190px;
    }
  }

  @media screen and (max-width: 833px) {
    display: flex;
  }
`;

export const RegisterPhoneWidget = () => {
    useEffect(() => {
        if (status === "fulfilled" && registerData?.success) {
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
    const [registerPhoneHandler, {
        data: registerData,
        status,
        isError,
        error: regError
    }] = useCommenceByPhoneNumberMutation();
    const error = regError as any;

    const {me, loading} = useGetMe();
    if (loading || me) return <></>;
    return (
        <>
            <FormFeature onSubmit={(e) => {
                e.preventDefault();
                loginHandler();
            }
            }>
                {isError && <Message title="Произошла ошибка"
                                     description={GetErrorDescription(error?.data?.text)}
                                     severity="error"/>}
                <Header size="s">Создайте аккаунт</Header>
                <ImageContainerInForm>
                    <Image alt="hello" src="/assets/images/hello.png" width={400} height={230}/>
                </ImageContainerInForm>
                <Text type="defaultLight">Добро пожаловать!<br/>Пожалуйста, введите свои данные.</Text>
                <Box display="flex" flexDirection="column" gap={sizes.s} width="320px">
                    <Input inputRef={phoneRef} type="phone" label="Телефон" placeholder="929-789-98-88"/>
                    <Button type="accent" buttonType="submit"
                            width="container">Получить СМС-код</Button>
                </Box>
                <Box display="flex" gap={sizes.xs} width="100%" justifyContent="center">
                    <Text type="defaultLight" size="s">У вас уже есть аккаунт?</Text>
                    <Link href="/login" type="accent" size="s">Вход</Link>
                </Box>
            </FormFeature>
            <ImageContainer>
                <Image alt="hello" src="/assets/images/hello.png" width={400} height={230}/>
            </ImageContainer>
        </>
    );
};