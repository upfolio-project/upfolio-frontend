import styled from "styled-components";
import {Box} from "@mui/material";
import {borders, colors, sizes, Wrapper} from "@/shared/styles";
import {Header, Text} from "@/shared/ui/text";
import {useGetProjectQuery, useGetProjectsQuery} from "@/shared/api/projects/projects";
import {messengers, Messengers} from "@/shared/ui/messengers";
import {Tags} from "@/shared/ui/tag";
import {useState} from "react";

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


const ProjectResponsiveContent = styled<{imageCount: number}>(Box)`
  width: 100%;
  column-gap: ${sizes.l};
  row-gap: ${sizes.m};
  align-items: flex-start;
  display: grid;
  & > * {
    word-wrap: anywhere;
    height: max-content;
  }
  
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

const Images = ({count}: { count: 1 | 2 | 3 }) => {
    const imageSizes = {
        "1": {areas: '"E"', sizes: [["944px", "358px"]]},
        "2": {areas: '"E F"', sizes: [["462px", "358px"], ["462px", "358px"]]},
        "3": {areas: '"E E" "F G"', sizes: [["482px", "358px"], ["230px", "170px"], ["230px", "170px"]]}
    };

    return (
        <Box
            display="grid"
            width="100%"
            gridTemplateAreas={imageSizes[count.toString()].areas}
            gap={sizes.s}
        >
            {imageSizes[count.toString()].sizes.map((size, index) => (
                <Box
                    key={index}
                    gridArea={"EFG"[index]}
                    borderRadius={borders.radius10}
                    backgroundColor={colors.colorSecondary05}
                    width={size[0]}
                    height={size[1]}
                />
            ))}
        </Box>
    );
};

export function ProjectWidget({uuid}: ProjectWidgetProps) {
    const [imageCount, changeImageCount] = useState(3);
    const {
        data: projectData,
        isLoading: getProjectLoading
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
                        <Images count={imageCount}/>
                    </Box>

                </ProjectResponsiveContent>
            </Wrapper>
        </ProjectWidgetContainer>
    );
}