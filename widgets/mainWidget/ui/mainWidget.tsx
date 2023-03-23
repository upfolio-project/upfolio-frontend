import {Container} from "@mui/material";
import {Text, Title} from "@/shared/ui/text";
import {Box} from "@mui/system";
import {LinkButton} from "@/shared/ui/button";
import styled from "styled-components";
import {Logo} from "@/shared/ui/logo";


export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
`;


export const MainWidget = () => {
    return (
        <ContainerStyled>
            <Box display="flex" alignItems="center">
                <Logo size="s" withText={true}/>
            </Box>
            <Box maxWidth="660px">
                <Title>
                    платформа, которая позволяет
                    соискателям находить работу,
                    а&nbsp;работодателям — работников&nbsp;или&nbsp;стажёров
                </Title>
            </Box>
            <Box maxWidth="300px">
            <Text size="m" align="center">
                Мы хотим упростить взаимодействие
                между студентами и IT-компаниями
            </Text>
            </Box>
            <Box display="flex" gap="10px" justifyContent="center">
                <LinkButton href="/register/enterPhone" type="success">
                    Зарегистрироваться
                </LinkButton>
                <LinkButton href="/login" type="default">
                    Войти
                </LinkButton>
            </Box>
        </ContainerStyled>
    );
};