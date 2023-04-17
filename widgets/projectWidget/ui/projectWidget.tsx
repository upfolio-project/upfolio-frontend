import styled from "styled-components";
import {Box} from "@mui/material";
import {sizes, Wrapper} from "@/shared/styles";
import {Header, Text} from "@/shared/ui/text";
import {useGetProjectQuery} from "@/shared/api/projects/projects";
import {messengers, Messengers} from "@/shared/ui/messengers";
import {Tags} from "@/shared/ui/tag";
import React, {useState} from "react";
import {ProjectImages} from "@/entities/projectImages";

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
  & img {
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
    children: React.ReactNode | React.ReactNode[]
    imageCount: number
}

const ProjectContent = ({children, ...props}: ProjectContentProps) => {
    return <Box {...props}>{children}</Box>;
};


const ProjectResponsiveContent =
    styled(ProjectContent)`
  & > * {
    word-wrap: anywhere;
    height: max-content;
  }
  width: 100%;
  column-gap: ${sizes.l};
  row-gap: ${sizes.m};
  align-items: flex-start;
  display: grid;
  
  grid-template-columns: ${props => props.imageCount === 3 ? "1fr 1fr" : "1fr"};
  grid-template-rows: auto auto 1fr;
  
  grid-template-areas:
  ${props => props.imageCount === 3 ?
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


    return (
        <ProjectWidgetContainer>
            <Wrapper>
                <HeaderContainer>
                    <Header size="s">{projectData?.title || ""}</Header>
                    <CustomMessengers

                    >
                        <Messengers messengers={mockMessengers}/>
                    </CustomMessengers>
                </HeaderContainer>
                <ProjectResponsiveContent imageCount={imageCount}>
                    <Box gridArea="A">
                        <Tags align="left" tags={projectData?.tags.map(tag => ({value: tag, link: "#"})) || []}/>
                    </Box>
                    <Box
                        gridArea="B"
                        display="flex"
                        flexDirection="column"
                        gap={sizes.xs}
                    >
                        <Text type="defaultLight">Добавлен <Text as="span"
                                                                 type="accent">{projectData?.created}</Text></Text>
                        <Text type="defaultLight">Разработка <Text as="span" type="accent">{projectData?.updated}</Text></Text>

                    </Box>
                    <Box gridArea="C">
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