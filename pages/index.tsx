import Head from "next/head";
import {MainWidget} from "@/widgets/mainWidget";
import {Header} from "@/widgets/headerWidget";
import {Box} from "@mui/material";
import {FooterWidget} from "@/widgets/footerWidget";


function Home() {
    return (
        <>
            <Head>
                <title>UpFolio</title>
            </Head>
            <Header/>
            <main>
                <Box
                    display="flex"
                    alignItems="center"
                    width="100vw"
                    minHeight="100vh"
                    justifyContent="center"
                >
                    <MainWidget/>
                </Box>
            </main>
            <FooterWidget/>
        </>
    );
}

export default Home;