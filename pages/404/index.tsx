import styled from "styled-components";
import {Box} from "@mui/material";
import {Text, Title} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";

export default function Error404() {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                width="100vw"
                minHeight="100vh"
                justifyContent="center"
            >
                <RootStyled
                    display="flex"
                    flexDirection="column"
                    gap="40px"
                    alignItems="center"
                >
                    <Title>Ошибка 404</Title>
                    <Text size="l">
                        Кажется, что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно, она
                        устарела,
                        была удалена, или был введён неверный адрес в адресной строке.
                    </Text>
                    <LinkButton href='/' type="success">Вернуться на главную</LinkButton>
                </RootStyled>
            </Box>
        </>
    );
}

const RootStyled = styled(Box)`
  text-align: center;
  @media screen and (min-width: 600px) {
    max-width: 580px;
  }

  @media screen and (max-width: 599px) {
    max-width: 90vw;
  }
`;