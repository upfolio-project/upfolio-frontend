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
            <Box display='flex' alignItems='center' gap='10px'>
                <Logo size='s' withText={true}/>
            </Box>
            <Box>
                <Title>
                    платформа, которая позволяет
                    соискателям находить работу,
                    <br/>а работодателям — работников или
                    стажеров.
                </Title>
            </Box>
            <Box display='flex' flexWrap='wrap' gap='39.5px' flexDirection='column' maxWidth='443px'>
                <Text size='m' align="center">
                    Мы хотим упростить взаимодействие
                    между студентами и IT-компаниями
                </Text>
                <Box display='flex' gap='20px' justifyContent='center'>
                    <LinkButton href='/register/enterPhone' type='success'>
                        Зарегистрироваться
                    </LinkButton>
                    <LinkButton href='/login' type='default'>
                        Войти
                    </LinkButton>
                </Box>
            </Box>
        </ContainerStyled>
    );
};