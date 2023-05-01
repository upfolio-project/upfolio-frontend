import React, {useState} from "react";

import styled from "styled-components";
import {Box} from "@mui/material";

import {useGetProjectQuery} from "@/shared/api/projects/projects";
import {ProjectImages} from "@/entities/projectImages";
import {ProjectStats} from "@/entities/projectStats";
import {useGetMe} from "@/shared/hooks";

import {Header, Messengers, sizes, Tag, Tags, Text, Wrapper, messengers} from "@upfolio-project/upfolio-ui";


interface ProjectWidgetProps {
    uuid?: string;
}

const ProjectWidgetContainer = styled(Box)`
  width: 1024px;

`;

const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CustomMessengers = styled(Box)`
  & svg {
    opacity: .5;
    width: 28px;
    height: 28px;
  }

  & > * {
    gap: ${sizes.xs}
  }
`;

const mockMessengers = [
    {
        name: messengers.dribbble,
        url: "#"
    },
    {
        name: messengers.behance,
        url: "#"
    },
    {
        name: messengers.github,
        url: "#"
    },
    {
        name: messengers.telegram,
        url: "#"
    },
];

interface ProjectContentProps {
    children: React.ReactNode | React.ReactNode[];
    ic: number;
}

const ProjectContent = ({children, ...props}: ProjectContentProps) => {
    return <Box {...props}>{children}</Box>;
};


const ProjectResponsiveContent = styled(ProjectContent)`
  & > * {
    word-wrap: anywhere;
    height: max-content;
  }

  width: 100%;
  column-gap: ${sizes.l};
  row-gap: ${sizes.m};
  align-items: flex-start;
  display: grid;

  grid-template-columns: ${props => props.ic === 3 ? "1fr 1fr" : "1fr"};
  grid-template-rows: auto auto 1fr;

  grid-template-areas: ${props => props.ic === 3 ?
          '"A D"' +
          '"B D"' +
          '"C D"' :
          '"A"' +
          '"D"' +
          '"B"' +
          '"C"'
  }
`;


export function ProjectWidget({uuid}: ProjectWidgetProps) {
    const [imageCount, changeImageCount] = useState(3);
    const {
        data: projectData,
    } = useGetProjectQuery({"uuid": uuid || ""}, {skip: !uuid});
    const {me} = useGetMe();

    return (
        <ProjectWidgetContainer>
            <Wrapper>
                <HeaderContainer>
                    <Box display="flex" gap={sizes.xs} alignItems="center">
                        <Header size="s">{projectData?.title || ""}</Header>
                        {me?.username && me?.username === projectData?.authorUsername &&
                            <Tag tagType="accent" value="Редактировать"
                                 link={`/${projectData?.authorUsername}/${projectData?.uuid}/edit`}/>}
                    </Box>
                    <CustomMessengers>
                        <Messengers messengers={mockMessengers}/>
                    </CustomMessengers>
                </HeaderContainer>
                <ProjectResponsiveContent ic={imageCount}>
                    <Box gridArea="A">
                        <Tags align="left" tags={projectData?.tags.map(tag => ({value: tag, link: "#"})) || []}/>
                    </Box>
                    <Box gridArea="B">
                        <ProjectStats created={projectData?.created || ""} updated={projectData?.updated || ""}/>
                    </Box>
                    <Box gridArea="C" sx={{whiteSpace: "pre-line"}}>
                        <Text type="defaultLight">
                            {projectData?.description}
                        </Text>
                    </Box>
                    <Box gridArea="D" width="100%" onClick={() => changeImageCount((imageCount + 1) % 3 + 1)}>
                        <ProjectImages images={[
                            "/assets/no-img.png",
                            "/assets/no-img.png",
                            "/assets/no-img.png"
                        ].slice(3 - imageCount)}/>
                    </Box>
                </ProjectResponsiveContent>
            </Wrapper>
        </ProjectWidgetContainer>
    );
}