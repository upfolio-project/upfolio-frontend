import {Box} from "@mui/system";
import {Container} from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

import {Header, Text, LinkButton, sizes} from "@upfolio-project/upfolio-ui";


export const ContainerStyled = styled(Container)`
  padding: 0;
  display: grid;

  @media screen and (min-width: 834px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 833px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: ${sizes.s};
  
  @media screen and(max-width: 833px) {
    
  }
`;

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
`;

export const MainWidget = () => {
    return (
        <ContainerStyled>
            <ImageContainer><Image alt="hello" src="/assets/images/hello.png" width={400} height={230}/></ImageContainer>
            <TextContent>
                <Box maxWidth="420px">
                    <Header size="s">
                        <Header as="span" size="s" type="accent">UpFolio</Header> — платформа,
                        которая позволяет
                        соискателям находить работу,
                        а работодателям —
                        работников&nbsp;или стажёров.
                    </Header>
                </Box>
                <Box maxWidth="300px">
                    <Text size="m">
                        Мы хотим упростить взаимодействие
                        между студентами и IT-компаниями
                    </Text>
                </Box>
                <Box display="flex" gap={sizes.xs}>
                    <LinkButton href="/register/enterPhone" type="accent">
                        Зарегистрироваться
                    </LinkButton>
                    <LinkButton href="/login" type="default">
                        Войти
                    </LinkButton>
                </Box>
            </TextContent>
        </ContainerStyled>
    );
};