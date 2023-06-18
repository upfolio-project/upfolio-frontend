import React, {useState} from "react";

import styled from "styled-components";
import {Box} from "@mui/material";

import {useGetProjectQuery} from "@/shared/api/projects/projects";
import {ProjectStats} from "@/entities/projectStats";
import {useGetMe} from "@/shared/hooks";

import {Header, sizes, Tag, Text} from "@upfolio-project/upfolio-ui";


interface ProjectWidgetProps {
    uuid?: string;
}

const ProjectWidgetContainer = styled(Box)`
  width: 1024px;

`;

const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
  
  @media screen and (max-width: 833px) {
    margin-bottom: ${sizes.m};
  }
`;


const ProjectContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.m};
`;

const LinksAndTagsContainer = styled(Box)`
  display: flex;
  gap: ${sizes.m};

  @media screen and (max-width: 833px) {
    flex-direction: column;
  }
`;

const LinksContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

const TagsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

const Description = styled(Box)` 
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

export function ProjectWidget({uuid}: ProjectWidgetProps) {
    const [imageCount, changeImageCount] = useState(3);
    const {
        data: projectData,
    } = useGetProjectQuery({"uuid": uuid || ""}, {skip: !uuid});
    const {me} = useGetMe();

    return (
        <>
            <HeaderContainer>
                <Box display="flex" gap={sizes.xs} alignItems="center">
                    <Header size="s">{projectData?.title || ""}</Header>
                    {me?.username && me?.username === projectData?.authorUsername &&
                        <Tag tagType="accent" value="Редактировать"
                             link={`/${projectData?.authorUsername}/${projectData?.uuid}/edit`}/>}
                </Box>
                <ProjectStats created={projectData?.created}/>
            </HeaderContainer>
            <ProjectContent>
                <LinksAndTagsContainer>
                    <LinksContainer>
                        <Header size="s">Ссылки</Header>
                        <Box>
                            <Text type="accent">GitHub</Text>
                            <Text type="accent">Behance</Text>
                            <Text type="accent">Dribbble</Text>
                        </Box>
                    </LinksContainer>
                    <TagsContainer>
                        <Header size="s">Тэги</Header>
                        <Text type="accent">{projectData?.tags.join(", ")}</Text>
                    </TagsContainer>
                </LinksAndTagsContainer>
                <Description>
                    <Header size="s">Описание</Header>
                    <Text>{projectData?.description}</Text>
                </Description>
            </ProjectContent>
        </>
    );
}