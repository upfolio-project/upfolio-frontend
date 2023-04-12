import styled from "styled-components";
import {Box} from "@mui/material";
import {colors, sizes} from "@/shared/styles";
import {Text} from "@/shared/ui/text";

interface ProjectPreviewEntityProps {
    name: string
    description: string
    tags: string[]
    created: string
}

const ProjectPreviewContainer = styled(Box)`
  padding: ${sizes.m};
  min-width: 5px;
  background-color: ${colors.colorSecondary05};
`;

const ProjectPreviewEntity = ({name, description, created, tags}: ProjectPreviewEntityProps) => {
    return (
        <ProjectPreviewContainer>
            <Text size="m" style="bold">{name}</Text>
        </ProjectPreviewContainer>
    );
};

export {ProjectPreviewEntity};
