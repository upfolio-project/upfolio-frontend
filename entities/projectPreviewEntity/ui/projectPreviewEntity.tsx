import styled from "styled-components";
import {Box} from "@mui/material";
import {Text, Tags, borders, colors, sizes} from "@upfolio-project/upfolio-ui";
import {registerDateToView} from "@/shared/utils/dataToView";
import Link from "next/link";

interface ProjectPreviewEntityProps {
    name: string;
    description: string;
    tags: string[];
    created: string;
    projectHref: string;
}

const ProjectPreviewContainer = styled(Box)`
  position: relative;
  padding: ${sizes.m};
  min-width: 5px;
  background-color: ${colors.colorSecondary05};
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
  border-radius: ${borders.radius10};
`;

const CardLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ProjectPreviewEntity = ({name, description, created, tags, projectHref}: ProjectPreviewEntityProps) => {
    return (
        <ProjectPreviewContainer>
            <CardLink href={projectHref || "#"}/>
            <Box display="flex" flexDirection="column" gap={sizes.xs}>
                <Text size="m" style="bold">{name}</Text>
                {description.length > 0 && <Text size="s" type="defaultLight">{description}</Text>}
            </Box>
            <Box zIndex="1" width="max-content" maxWidth="100%">
                {tags && <Tags tags={tags.map(tag => ({value: tag, link: "#"}))} align="left" tagType="accent"/>}
            </Box>
            <Text size="s" type="defaultLight">{registerDateToView(new Date(created)) + " назад"}</Text>
        </ProjectPreviewContainer>
    );
};

export {ProjectPreviewEntity};
