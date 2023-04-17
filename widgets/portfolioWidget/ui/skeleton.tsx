import {Box, Skeleton as MUISkeleton} from "@mui/material";
import {Header, Text} from "@/shared/ui/text";
import styled from "styled-components";
import {borders, sizes, Wrapper} from "@/shared/styles";

const PortfolioDataStyled = styled(Box)`
  width: 676px;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.s};
  width: 100%;
`;


const Skeleton = () => {
    return (
        <>
            <PortfolioDataStyled>
                <Wrapper>
                    <Box width="100%" justifyContent="left"><Header size="s">Портфолио</Header></Box>

                    <ContentContainer>
                        <MUISkeleton variant="rectangular" height="220px" width="100%" sx={{borderRadius: borders.radius10}}/>
                        <MUISkeleton variant="rectangular" height="220px" width="100%" sx={{borderRadius: borders.radius10}}/>
                        <MUISkeleton variant="rectangular" height="220px" width="100%" sx={{borderRadius: borders.radius10}}/>
                    </ContentContainer>
                </Wrapper>
            </PortfolioDataStyled>

        </>
    );
};

export {Skeleton};