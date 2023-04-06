import {Box} from "@mui/system";
import styled from "styled-components";
import {Text} from "@/shared/ui/text";
import {Link} from "@/shared/ui/link";
import {colors, fonts, sizes} from "@/styles/variables";
import {Logo} from "@/shared/ui/logo";


const Col = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const ColWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled(Box)`
  display: flex;

  & * {
    width: auto;
    display: inline;
    word-wrap: normal;
  }
`;

const LinksWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: ${sizes.m};
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
                        <Text style="bold" size="m">
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
                        <Text style="bold" size="m">
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
                        <Text style="bold" size="m">
                            Документы
                        </Text>
                        <Col gap="10px">
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
                    <Text as="span">
                        <Link href="/" size="m" type="accent" as="span">UpFolio</Link><span>, </span>
                        <Link href="mailto:inbox@upfolio.ru" size="m">inbox@upfolio.ru</Link>
                    </Text>
                </Row>
                <Row>
                    <Text size="m">Сейчас на сайте <MarkStyled>123</MarkStyled> портфолио
                        и <MarkStyled>321</MarkStyled> вакансии</Text>
                </Row>
            </ColWrapper>
        </FooterStyled>
    );
};