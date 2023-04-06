import {Box} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";
import styled from "styled-components";
import {sizes} from "@/shared/styles";

export function Error404Entity() {
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <RootStyled
                display="flex"
                flexDirection="column"
                gap={sizes.s}
                alignItems="center"
            >
                <Header size="s" style="bold">Ошибка 404</Header>
                <Text size="m" align="center">
                    Кажется, что-то пошло не так!<br/>
                    Страница, которую вы запрашиваете, не существует.
                    Возможно, она устарела, была удалена,<br/>
                    или был введён неверный адрес в адресной строке.
                </Text>
                <LinkButton href="/" type="accent">Вернуться на главную</LinkButton>
            </RootStyled>
        </Box>
    );
}

const RootStyled = styled(Box)`
  text-align: center;
  @media screen and (min-width: 600px) {
    max-width: 420px;
  }

  @media screen and (max-width: 599px) {
    max-width: 90vw;
  }
`;