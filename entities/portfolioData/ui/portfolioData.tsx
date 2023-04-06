import {Wrapper} from "@/shared/styles";
import styled from "styled-components";
import {Box} from "@mui/material";
import {Header} from "@/shared/ui/text";

const PortfolioContainer = styled(Box)`
  width: 100%;
`;

// interface PortfolioDataProps {}

const PortfolioData = (
    // props: PortfolioDataProps
) => {
    return (
        <Wrapper>
            <PortfolioContainer>
                <Box width="100%" justifyContent="left"><Header size="s">Портфолио</Header></Box>
            </PortfolioContainer>
        </Wrapper>
    );
};

export {PortfolioData};
