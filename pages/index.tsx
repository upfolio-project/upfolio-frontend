import {MainWidget} from "@/widgets/mainWidget";
import {Header} from "@/widgets/headerWidget";
import {Box} from "@mui/material";
import {FooterWidget} from "@/widgets/footerWidget";
import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 160px;
  min-height: 100vh;
  height: max-content;
  width: 100vw;
`;


function Home() {
    return (
        <>
            <Header/>
            <Main>
                <Box
                    width="100vw"
                >
                    <MainWidget/>
                </Box>
            </Main>
            <FooterWidget/>
        </>
    );
}

export default Home;