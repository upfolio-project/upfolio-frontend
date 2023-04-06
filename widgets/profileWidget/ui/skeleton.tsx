import {Box, Skeleton as MUISkeleton} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import styled from "styled-components";
import {borders, colors} from "@/shared/styles";

const PortfolioData = styled(Box)`
  width: 676px;
  border: ${borders.width2px(colors.colorSecondary05)};
  border-radius: ${borders.radius10};
  min-height: 120vw;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 47px;
  gap: 20px;
  border: ${borders.width2px(colors.colorSecondary05)};
  border-radius: ${borders.radius10};
`;

const UserDataStyled = styled(Box)`
  align-self: flex-start;
  overflow-y: auto;
  position: sticky;
  top: 10px;
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;


const Skeleton = () => {
    return (
        <>
            <UserDataStyled>
                <Wrapper>
                    <MUISkeleton variant="circular" height="154px" width="154px"/>
                    <ContentContainer>
                        <MUISkeleton variant="text" height="24px" width="200px"/>
                        <MUISkeleton variant="text" height="16px" width="80px"/>
                        <MUISkeleton variant="text" height="16px" width="120px"/>
                        <Box display="flex" flexWrap="wrap" gap="20px">
                            {[1, 2, 3].map(i => <MUISkeleton key={i} variant="text" height="16px" width="40px"/>)}
                        </Box>
                    </ContentContainer>
                </Wrapper>
                <Wrapper>
                    <Header size="s">Обо мне</Header>
                    <Box>
                        <MUISkeleton variant="text" height="22px" width="200px"/>
                        <MUISkeleton variant="text" height="22px" width="200px"/>
                        <MUISkeleton variant="text" height="22px" width="200px"/>
                        <MUISkeleton variant="text" height="22px" width="200px"/>
                    </Box>
                </Wrapper>
                <Wrapper>
                    <Header size="s">Контакты</Header>
                    {<Text size="s" type="defaultLight">...</Text>}
                </Wrapper>
            </UserDataStyled>
            <PortfolioData></PortfolioData>

        </>
    );
};

export {Skeleton};