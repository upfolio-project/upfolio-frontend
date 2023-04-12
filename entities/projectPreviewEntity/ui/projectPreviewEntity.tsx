import styled from "styled-components";
import {Box} from "@mui/material";
import {colors, sizes} from "@/shared/styles";

const ProjectPreviewContainer = styled(Box)`
  padding: ${sizes.m};
  min-width: 5px;
  background-color: ${colors.colorSecondary05};
`;

const ProjectPreviewEntity = () => {
    return (
        <ProjectPreviewContainer>
        </ProjectPreviewContainer>
    );
};

export {ProjectPreviewEntity};
