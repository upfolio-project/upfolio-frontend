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

  & * {
    gap: 40px;
  }
`;


export const Header = () => {
    return (
        <AppBarStyled position='absolute'>
            <Toolbar>
                <Link href='#'>Главная</Link>
                <Link href='#'>Портфолио</Link>
                <Link href='#'>Компании</Link>
                <Link href='#'>Партнёры</Link>
                <Link href='#'>О платформе</Link>
                <Link href='#'>Личный кабинет</Link>
            </Toolbar>
        </AppBarStyled>
    );
};