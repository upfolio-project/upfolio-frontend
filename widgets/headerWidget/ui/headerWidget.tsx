import {AppBar, Toolbar} from "@mui/material";
import {Link} from "@/shared/ui/link";
import styled from "styled-components";
import {colors} from "@/styles/variables";

const AppBarStyled = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  background-color: ${colors.colorDominant};
  margin-top: 50px;

  & * {
    min-height: max-content;
    gap: 40px;
  }
`;


export const Header = () => {
    return (
        <AppBarStyled position='absolute'>
            <Toolbar>
                <Link href='/'>Главная</Link>
                <Link href='/search'>Портфолио</Link>
                <Link href='/companies'>Компании</Link>
                <Link href='/partners'>Партнёры</Link>
                <Link href='/about'>О платформе</Link>
                <Link href='/me'>Личный кабинет</Link>
            </Toolbar>
        </AppBarStyled>
    );
};