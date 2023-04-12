import styled from "styled-components";

import {Box} from "@mui/material";
import {Header} from "@/shared/ui/text";
import {Wrapper} from "@/shared/styles";

const PortfolioDataStyled = styled(Box)`
  width: 676px;
`;

const PortfolioContainer = styled(Box)`
  width: 100%;
`;

const PortfolioWidget = () => {
    return (
        <PortfolioDataStyled>
            <Wrapper>
                <PortfolioContainer>
                    <Box width="100%" justifyContent="left"><Header size="s">Портфолио</Header></Box>
                </PortfolioContainer>
            </Wrapper>
        </PortfolioDataStyled>
    );
};

export {PortfolioWidget};
