import styled from "styled-components";

import {Box} from "@mui/material";
import {Header} from "@/shared/ui/text";
import {sizes, Wrapper} from "@/shared/styles";
import {ProjectPreviewEntity} from "@/entities/projectPreviewEntity";

const PortfolioDataStyled = styled(Box)`
  width: 676px;
`;

const PortfolioContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s}
`;

const mockProjects = [
    {
        name: "Task manager",
        description: "Приложение для повышения продуктивности, постановки задач, планирования дня, достижения успеха. Приложение для повышения продуктивности, постановки задач, планирования дня, достижения успеха.",
        tags: ["flask", "python", "tasks", "queue", "js", "css", "html"],
        created: "2022-11-05",
        projectHref: "#1"
    },
    {
        name: "Without description",
        description: "",
        tags: ["flask", "python", "tasks"],
        created: "2022-08-03",
        projectHref: "#2"
    },
    {
        name: "Without tags",
        description: "Приложение для повышения продуктивности, постановки задач, планирования дня, достижения успеха. Приложение для повышения продуктивности, постановки задач, планирования дня, достижения успеха.",
        tags: [],
        created: "2022-11-05",
        projectHref: "#3"
    }
];

interface PortfolioWidgetProps {
    userUuid: string | undefined
    isLoading: boolean
}

const PortfolioWidget = ({userUuid, isLoading}: PortfolioWidgetProps) => {

    return (
        <PortfolioDataStyled>
            <Wrapper>
                <PortfolioContainer>
                    <Box width="100%" justifyContent="left"><Header size="s">Портфолио</Header></Box>
                    {mockProjects.map(project => <ProjectPreviewEntity {...project} key={project.name}/>)}
                </PortfolioContainer>
            </Wrapper>
        </PortfolioDataStyled>
    );
};

export {PortfolioWidget};
