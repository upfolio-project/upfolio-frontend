import styled from "styled-components";
import {sizes} from "@/shared/styles";
import {Text} from "@/shared/ui/text";
import {Box} from "@mui/material";
import React from "react";
import {registerDateToView} from "@/shared/utils/dataToView";

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
    const createdDate = new Date(created || "");
    const updatedDate = new Date(updated || "");
    return (
        <ProjectStatsContainer
        >
            <Text type="defaultLight">Добавлен <Text as="span" type="accent">
                {registerDateToView(createdDate)}
            </Text></Text>
            <Text type="defaultLight">Разработка <Text as="span" type="accent">
                {registerDateToView(updatedDate)}
            </Text></Text>
        </ProjectStatsContainer>

    );
}