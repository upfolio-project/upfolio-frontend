import styled from "styled-components";
import {Box} from "@mui/material";
import {Text, Tags, borders, colors, sizes, Title, Header} from "@upfolio-project/upfolio-ui";
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
  width: 100%;
  min-width: 5px;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
  border-radius: ${borders.radius10};
  margin-top: ${sizes.m};
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
    const dateView = registerDateToView(new Date(created));
    return (
        <ProjectPreviewContainer>
            <CardLink href={projectHref || "#"}/>
            <Header size="s">{name}</Header>
            {description.length > 0 && <Text size="m">{description}</Text>}
            {tags && <Text type="accent">{tags.join(", ")}</Text>}
            <Text>Добавлен {dateView} {dateView !== "сегодня" && "назад"}</Text>
        </ProjectPreviewContainer>
    );
};

export {ProjectPreviewEntity};
