import styled from "styled-components";
import {Box} from "@mui/material";

import {ProjectPreviewEntity} from "@/entities/projectPreviewEntity";
import {useGetProjectsQuery} from "@/shared/api/projects/projects";
import {Skeleton} from "./skeleton";

import {Link, sizes} from "@upfolio-project/upfolio-ui";
import {useGetMe} from "@/shared/hooks";

const AddButton = styled(Box)`
  align-self: center;
  margin-top: ${sizes.m};
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
        <>
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
            {username === user?.me?.username && <AddButton><Link type="accent" href="/create" as="span">Добавить проект</Link></AddButton>}
        </>
    );
};

export {PortfolioWidget};
