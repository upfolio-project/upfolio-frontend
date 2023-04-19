import {Box, Skeleton as MUISkeleton} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import styled from "styled-components";
import {sizes, Wrapper } from "@/shared/styles";

const UserDataStyled = styled(Box)`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
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
                    <MUISkeleton sx={{borderRadius: sizes.s}} variant="rounded" height="154px" width="154px"/>
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
                    <Header size="s">Контакты</Header>
                    {<Text size="s" type="defaultLight">...</Text>}
                </Wrapper>
            </UserDataStyled>

        </>
    );
};

export {Skeleton};