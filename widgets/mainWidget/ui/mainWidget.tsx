import {Box} from "@mui/system";
import {Container} from "@mui/material";
import styled from "styled-components";

import {Header, Text, LinkButton, sizes} from "@upfolio-project/upfolio-ui";


export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
  text-align: center;
  align-items: center;
`;


export const MainWidget = () => {
    return (
        <ContainerStyled>
            <Box maxWidth="386px">
                <Header size="s" style="bold" align="center">
                    <Header as="span" size="s" type="accent" style="bold">UpFolio</Header> — платформа,
                    которая&nbsp;позволяет
                    соискателям находить работу,
                    а работодателям —
                    работников&nbsp;или стажёров.
                </Header>
            </Box>
            <Box maxWidth="300px">
            <Text size="m" align="center">
                Мы хотим упростить взаимодействие
                между студентами и IT-компаниями
            </Text>
            </Box>
            <Box display="flex" gap={sizes.xs} justifyContent="center">
                <LinkButton href="/register/enterPhone" type="accent">
                    Зарегистрироваться
                </LinkButton>
                <LinkButton href="/login" type="default">
                    Войти
                </LinkButton>
            </Box>
        </ContainerStyled>
    );
};