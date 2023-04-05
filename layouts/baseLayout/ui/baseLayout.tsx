import React from "react";
import {Header} from "@/widgets/headerWidget";
import {FooterWidget} from "@/widgets/footerWidget";
import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  padding-top: 200px;
  padding-bottom: 160px;
  min-height: 100vh;
  height: calc(100% + 200px);
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
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
                    {children}
                </Main>
                <FooterWidget/>
            </Content>
        </>
    );
};