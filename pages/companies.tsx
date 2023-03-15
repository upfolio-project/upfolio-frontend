import {InProgressWidget} from "@/widgets/inProgressWidget";
import {Header} from "@/widgets/headerWidget";
import {FooterWidget} from "@/widgets/footerWidget";
import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 160px;
  min-height: 100vh;
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: start;
  justify-content: center;
`;

function Companies() {
    return (
        <>
            <Header/>
            <Main>
                <InProgressWidget/>
            </Main>
            <FooterWidget/>
        </>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            meta: {
                title: `Компании — UpFolio`,
                tags: [
                    {
                        name: "title",
                        content: `Компании — UpFolio`,
                        key: "title"
                    },
                ]
            }
        }
    };

};


export default Companies;