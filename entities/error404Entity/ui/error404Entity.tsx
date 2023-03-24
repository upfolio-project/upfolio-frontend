import {Box} from "@mui/material";
import {Text, Title} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";
import styled from "styled-components";

export function Error404Entity() {
    return (
        <Box
            width="100vw"
            display="flex"
            justifyContent="center"
        >
            <RootStyled
                display="flex"
                flexDirection="column"
                gap="20px"
                alignItems="center"
            >
                <Title>Ошибка 404</Title>
                <Text size="m" align="center">
                    Кажется, что-то пошло не так!<br/> Страница, которую вы запрашиваете, не существует.<br/>
                    Возможно, она устарела, была удалена,<br/>или был введён неверный адрес в адресной строке.
                </Text>
                <LinkButton href="/" type="success">Вернуться на главную</LinkButton>
            </RootStyled>
        </Box>
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