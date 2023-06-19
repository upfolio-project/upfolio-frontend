import {Box} from "@mui/system";
import styled from "styled-components";

import {Text, Link, Logo, colors, fonts, sizes} from "@upfolio-project/upfolio-ui";


const Col = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 152px;
  & * {
    max-width: 152px;
    overflow-wrap: anywhere;
    word-wrap: anywhere;
  }
`;

const ColWrapper = styled(Box)`
  display: grid;
  flex-direction: row;
  align-items: start;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  
  & > * {
    width: 100%;
  }
  @media screen and (max-width: 833px) {
    flex-direction: column;
  }
  
  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
    gap: ${sizes.m};
  }
`;

const Row = styled(Box)`
  display: flex;

  & * {
    width: auto;
    word-wrap: normal;
  }

  @media screen and (max-width: 833px) {
    flex-direction: column;
  }
`;

const LinksWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: ${sizes.m};

  @media screen and (max-width: 833px) {
    flex-direction: column;
  }
`;

const FooterStyled = styled("footer")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.m};
  margin-bottom: ${sizes.l};
`;

const MarkStyled = styled("mark")`
  color: ${colors.colorAccent};
  font: ${fonts.m()};
  background-color: ${colors.colorDominant};
`;

export const FooterWidget = () => {
    return (
        <FooterStyled>
            <ColWrapper>
                <Col gap={sizes.s}>
                    <Logo withText size="s"/>
                    <Box width="175px">
                        <Text size="m" type="defaultLight">
                            Платформа
                            для&nbsp;размещения
                            цифрового портфолио
                        </Text>
                    </Box>
                </Col>
                <LinksWrapper>
                    <Col gap={sizes.s}>
                        <Text type="accent" size="m">
                            UpFolio
                        </Text>
                        <Col gap={sizes.xs}>
                            <Link href="#">
                                О платформе
                            </Link>
                            <Link href="#">
                                Каталог вакансий
                            </Link>
                            <Link href="#">
                                Контакты
                            </Link>
                        </Col>
                    </Col>
                    <Col gap={sizes.s}>
                        <Text type="accent" size="m">
                            Помощь
                        </Text>
                        <Col gap={sizes.xs}>
                            <Link href="#">
                                Для специалистов
                            </Link>
                            <Link href="#">
                                Для работодателей
                            </Link>
                            <Link href="#">
                                FAQ
                            </Link>
                        </Col>
                    </Col>
                    <Col gap={sizes.s}>
                        <Text type="accent" size="m">
                            Документы
                        </Text>
                        <Col>
                            <Link href="#">
                                Соглашение с пользователем
                            </Link>
                            <Link href="#">
                                Наши партнёры
                            </Link>
                        </Col>
                    </Col>
                </LinksWrapper>
            </ColWrapper>
            <ColWrapper>
                <Row>
                    <Box display="flex" flexDirection="row">
                        <Link href="/" size="m" type="accent">UpFolio</Link><Text size="m">,&nbsp;</Text>
                        <Link href="mailto:inbox@upfolio.ru" size="m">inbox@upfolio.ru</Link>
                    </Box>
                </Row>
                <Row>
                    <Text size="m">Сейчас на сайте <MarkStyled>123</MarkStyled> портфолио
                        и <MarkStyled>321</MarkStyled> вакансии</Text>
                </Row>
            </ColWrapper>
        </FooterStyled>
    );
};