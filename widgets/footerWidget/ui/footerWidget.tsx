import {Box} from "@mui/system";
import styled from "styled-components";
import {Text} from "@/shared/ui/text";
import {Link} from "@/shared/ui/link";
import {colors, fonts} from "@/styles/variables";


const Col = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const ColWrapper = styled(Box)`
  display: flex;
  flex-direction: row;;
  align-items: start;
  max-width: 951px;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled(Box)`
  display: flex;
`;

const FooterStyled = styled("footer")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 120px;
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
                <Col gap='20px'>
                    <Text style='bold' size='m'>
                        UpFolio
                    </Text>
                    <Col gap='10px'>
                        <Link href='#'>
                            О платформе
                        </Link>
                        <Link href='#'>
                            Каталог вакансий
                        </Link>
                        <Link href='#'>
                            Контакты
                        </Link>
                    </Col>
                </Col>
                <Col gap='20px'>
                    <Text style='bold' size='m'>
                        Помощь
                    </Text>
                    <Col gap='10px'>
                        <Link href='#'>
                            Для специалиста
                        </Link>
                        <Link href='#'>
                            Для работодателя
                        </Link>
                        <Link href='#'>
                            FAQ
                        </Link>
                    </Col>
                </Col>
                <Col gap='20px'>
                    <Text style='bold' size='m'>
                        Документы
                    </Text>
                    <Col gap='10px'>
                        <Link href='#'>
                            Соглашение с пользователем
                        </Link>
                        <Link href='#'>
                            Наши партнёры
                        </Link>
                    </Col>
                </Col>
                <Col gap='20px'>
                    <Text style='bold' size='m'>
                        Следите за нами в соцсетях
                    </Text>
                    <Col gap='10px'>
                        <Link href='#'>
                            VK
                        </Link>
                        <Link href='#'>
                            Telegram
                        </Link>
                    </Col>
                </Col>
            </ColWrapper>
            <ColWrapper>
                <Row>
                    <Text size='m'><MarkStyled>UpFolio</MarkStyled>, inbox@upfolio.ru</Text>
                </Row>
                <Row>
                    <Text size='m'>Сейчас на сайте <MarkStyled>123</MarkStyled> портфолио
                        и <MarkStyled>321</MarkStyled> вакансии</Text>
                </Row>
            </ColWrapper>
        </FooterStyled>
    );
};