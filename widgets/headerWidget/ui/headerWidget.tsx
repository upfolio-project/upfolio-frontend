import {AppBar as AppBarMUI, Box, Toolbar as ToolbarMUI} from "@mui/material";
import styled from "styled-components";


import {useGetMe, useGetPathRoute} from "@/shared/hooks";

import {Link, colors, sizes, Logo, Text} from "@upfolio-project/upfolio-ui";

const AppBar = styled(AppBarMUI)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  box-sizing: border-box;
  background-color: ${colors.colorDominant};
  margin-top: ${sizes.s};
  width: 100%;

  & * {
    min-height: max-content;
  }

  & > * {
    & > div {
      
    }

    & > div > div {
      
    }
  }
`;

const Toolbar = styled(ToolbarMUI)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;

  @media screen and (max-width: 1023px) {
    align-items: start !important;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
`;

const RightBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media screen and (max-width: 833px) {
    flex-direction: column;
    gap: ${sizes.xs};
  }
`;

const Menu = styled(Box)`
  display: flex;
  justify-content: center;
  gap: ${sizes.s};
  justify-self: center;
  width: 100%;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 0;
  }
`;

const SelfBlock = styled(Box)`
    
`;

const LoginOrRegister = styled(Box)`
  display: flex;
  
  @media screen and (max-width: 833px) {
    flex-direction: column;
  }
`;

const Separator = styled(Box)`
  @media screen and (max-width: 833px) {
    display: none;
  }  
`;


export const Header = () => {
    const {me, loading} = useGetMe();
    const hasAccount = Boolean(!loading && me?.username);

    const path = useGetPathRoute();

    return (
        <AppBar position="absolute">
            <Toolbar>
                <Link href="/" as="span"><Logo withText size="s"/></Link>
                <RightBlock>
                    <Menu>
                        <Link href="/search" type={(path === "search" && "accent") || undefined}>Портфолио</Link>
                        <Link href="/companies" type={(path === "companies" && "accent") || undefined}>Компании</Link>
                        <Link href="/partners" type={(path === "partners" && "accent") || undefined}>Партнёры</Link>
                        <Link href="/about" type={(path === "about" && "accent") || undefined}>О платформе</Link>
                    </Menu>
                    <SelfBlock>
                        {hasAccount && <Link href={`/${me?.username}` || "#"}>Моё портфолио</Link>}
                        {!hasAccount && <LoginOrRegister>
                            <Link href="/login" as="span">Войти</Link>
                            <Separator><Text as="span">&nbsp;/&nbsp;</Text></Separator>
                            <Link href="/register" as="span">Зарегистрироваться</Link>
                        </LoginOrRegister>}
                    </SelfBlock>
                </RightBlock>
            </Toolbar>
        </AppBar>
    );
};