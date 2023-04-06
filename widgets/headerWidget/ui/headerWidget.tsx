import {AppBar, Toolbar} from "@mui/material";
import {Link} from "@/shared/ui/link";
import styled from "styled-components";
import {colors, sizes} from "@/shared/styles";
import {Logo} from "@/shared/ui/logo";

const AppBarStyled = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  background-color: ${colors.colorDominant};
  margin-top: ${sizes.m};
  width: 100%;

  & * {
    min-height: max-content;
  }

  & > * {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    
    & > div {
      display: flex;
      justify-content: space-between;
      gap: ${sizes.m}
    }
  }
`;


export const Header = () => {
    return (
        <AppBarStyled position="absolute">
            <Toolbar>
                <Link href="/" as="span"><Logo withText size="s"/></Link>
                <div>
                    <Link href="/search">Портфолио</Link>
                    <Link href="/companies">Компании</Link>
                    <Link href="/partners">Партнёры</Link>
                    <Link href="/about">О платформе</Link>
                </div>
                <Link href="/me">Личный кабинет</Link>
            </Toolbar>
        </AppBarStyled>
    );
};