import styled from "styled-components";
import {Text, sizes} from "@upfolio-project/upfolio-ui";
import {Box} from "@mui/material";
import React from "react";
import {registerDateToView} from "@/shared/utils/dataToView";

interface ProjectStatsProps {
    created?: string;
}

const ProjectStatsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}
`;

export function ProjectStats({created}: ProjectStatsProps) {
    const createdDate = new Date(created || "");
    const createdDateString = registerDateToView(createdDate);
    return (
        <ProjectStatsContainer>
            <Text>Добавлен {createdDateString} {createdDateString !== "сегодня" && "назад"}
            </Text>
        </ProjectStatsContainer>

    );
}