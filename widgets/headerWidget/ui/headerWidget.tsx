import {AppBar, Toolbar} from "@mui/material";
import {Link} from "@/shared/ui/link";
import styled from "styled-components";
import {colors, sizes} from "@/shared/styles";
import {Logo} from "@/shared/ui/logo";
import {useRouter} from "next/router";

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
    const router = useRouter();

    const path = router.asPath;

    return (
        <AppBarStyled position="absolute">
            <Toolbar>
                <Link href="/" as="span"><Logo withText size="s"/></Link>
                <div>
                    <Link href="/search" type={(path === "/search" && "accent") || undefined}>Портфолио</Link>
                    <Link href="/companies" type={(path === "/companies" && "accent") || undefined}>Компании</Link>
                    <Link href="/partners" type={(path === "/partners" && "accent") || undefined}>Партнёры</Link>
                    <Link href="/about" type={(path === "/about" && "accent") || undefined}>О платформе</Link>
                </div>
                <Link href="/me">Личный кабинет</Link>
            </Toolbar>
        </AppBarStyled>
    );
};