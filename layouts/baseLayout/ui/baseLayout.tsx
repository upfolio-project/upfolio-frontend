import React from "react";
import {Header} from "@/widgets/headerWidget";
import {FooterWidget} from "@/widgets/footerWidget";
import styled from "styled-components";
import {sizes} from "@upfolio-project/upfolio-ui";
import {Container} from "@mui/material";

const ContainerStyled = styled(Container)`
  padding: 0;
  display: grid;

  @media screen and (min-width: 834px) {
    grid-template-columns: 1fr 1fr;
    
    & > * {
      margin-left: 0;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 833px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  box-sizing: border-box;
  padding-top: calc(${sizes.l} + ${sizes.s} + ${sizes.m});
  padding-bottom: 160px;
  min-height: 100vh;
  height: calc(100% + 200px);
  width: 100%;
  max-width: 1024px;

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }

  @media screen and (max-width: 1023px) and (min-width: 834px) {
    width: calc(100vw - ${sizes.s} - ${sizes.s});
  }

  @media screen and (max-width: 834px) {
    width: calc(100vw - (${sizes.xs} + ${sizes.xxs}) * 2);
  }
`;

const Content = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1024px) {
    width: 1024px;
  }

  @media screen and (max-width: 1023px) and (min-width: 834px) {
    width: calc(100vw - ${sizes.s} - ${sizes.s});
  }

  @media screen and (max-width: 834px) {
    width: calc(100vw - (${sizes.xs} + ${sizes.xxs}) * 2);
  }
`;

interface BaseLayoutProps {
    children: React.ReactNode;
}


export const BaseLayout = ({children}: BaseLayoutProps) => {
    return (
        <>
            <Content>
                <Header/>
                <Main>
                    <ContainerStyled>
                        {children}
                    </ContainerStyled>
                </Main>
                <FooterWidget/>
            </Content>
        </>
    );
};