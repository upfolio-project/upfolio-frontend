import styled from "styled-components";
import {Box} from "@mui/material";

import {ProjectPreviewEntity} from "@/entities/projectPreviewEntity";
import {useGetProjectsQuery} from "@/shared/api/projects/projects";
import {Skeleton} from "./skeleton";

import {Header, Wrapper, sizes, LinkButton} from "@upfolio-project/upfolio-ui";
import {useGetMe} from "@/shared/hooks";


const PortfolioDataStyled = styled(Box)`
  width: 676px;
`;

const PortfolioContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.s}
`;

interface PortfolioWidgetProps {
    username: string | undefined;
    userUuid: string | undefined;
    isLoading: boolean;
}

const PortfolioWidget = ({username, userUuid, isLoading}: PortfolioWidgetProps) => {
    const {
        data: projectsData,
        isLoading: getProjectsLoading
    } = useGetProjectsQuery({"userUuid": userUuid || ""}, {skip: !userUuid || isLoading});

    const user = useGetMe();
    if (getProjectsLoading || isLoading) return <Skeleton/>;
    const projects = projectsData?.projects || [];

    return (
        <PortfolioDataStyled>
            <Wrapper>
                <PortfolioContainer>
                    <Box width="100%" justifyContent="left"><Header size="s">Портфолио</Header></Box>
                    {projects.map(project => (
                        <ProjectPreviewEntity
                            name={project.title}
                            description={project.description}
                            created={project.created}
                            tags={project.tags}
                            projectHref={`${username}/${project.uuid}`}
                            key={project.title}
                        />
                    ))}
                    {username === user?.me?.username && <LinkButton type="accent" href="/create">Добавить проект</LinkButton>}
                </PortfolioContainer>
            </Wrapper>
        </PortfolioDataStyled>
    );
};

export {PortfolioWidget};
