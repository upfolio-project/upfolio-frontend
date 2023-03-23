import styled from "styled-components";
import {Box} from "@mui/material";
import {Text, Title} from "@/shared/ui/text";
import {LinkButton} from "@/shared/ui/button";
import {Header} from "@/widgets/headerWidget";
import {FooterWidget} from "@/widgets/footerWidget";

const Main = styled.main`
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 160px;
  min-height: 100vh;
  height: max-content;
  width: 100vw;
`;

export default function Error404() {
    return (
        <>
            <Header/>
            <Main>
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
            </Main>
            <FooterWidget/>
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