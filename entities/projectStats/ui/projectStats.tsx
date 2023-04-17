import styled from "styled-components";
import {sizes} from "@/shared/styles";
import {Text} from "@/shared/ui/text";
import {Box} from "@mui/material";
import React from "react";

interface ProjectStatsProps {
    created?: string;
    updated?: string;
}

const ProjectStatsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}
`;

export function ProjectStats({created, updated}: ProjectStatsProps) {
    return (
        <ProjectStatsContainer
        >
            <Text type="defaultLight">Добавлен <Text as="span" type="accent">{created}</Text></Text>
            <Text type="defaultLight">Разработка <Text as="span" type="accent">{updated}</Text></Text>
        </ProjectStatsContainer>

    );
}