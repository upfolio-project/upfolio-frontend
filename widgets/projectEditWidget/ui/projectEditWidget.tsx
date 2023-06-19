import {useRef} from "react";

import {Box} from "@mui/material";
import styled from "styled-components";

import {useEditProjectMutation, useGetProjectQuery} from "@/shared/api/projects/projects";
import {FormFeature} from "@/features/formFeature";

import {ChipInput, Input, TextField, Button, Message, Link, Header} from "@upfolio-project/upfolio-ui";
import {useGetMe} from "@/shared/hooks";


interface ProjectEditWidgetProps {
    uuid: string;
}

const ProjectEditWidgetContainer = styled(Box)`
  width: 1024px;
`;

export function ProjectEditWidget({uuid}: ProjectEditWidgetProps) {
    const editHandler = () => {
        return editProject({
            uuid: uuid,
            body: {
                title: titleRef.current?.value || "",
                description: descriptionRef.current?.value || "",
                tags: tagsRef?.current?.value || []
            }
        });
    };

    const {
        data: projectData,
        isLoading: getProjectLoading
    } = useGetProjectQuery({"uuid": uuid || ""}, {skip: !uuid});

    const {me} = useGetMe();

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);

    const [editProject, {status, isError, error}] = useEditProjectMutation();

    if (getProjectLoading || !projectData) return <></>;
    const projectError = error as any;

    return (
        <ProjectEditWidgetContainer>
            <Box position="absolute">
                <Link
                    href={`/${me?.username}/${projectData.uuid}`}
                    type="defaultLight"
                >
                    {'<'} К проекту
                </Link>
            </Box>
            <FormFeature onSubmit={(e) => {
                e.preventDefault();
                editHandler();
            }}
            >
                {isError && <Message title="Произошла ошибка" description={projectError && projectError?.data?.text}
                                     severity="error"/>}
                {status === "fulfilled" &&
                    <Message title="Сохранено" description="Данные успешно сохранены" severity="success"/>}
                <Header size="s">Редактировать проект</Header>
                <Input
                    label="Название проекта"
                    placeholder={projectData.title}
                    defaultValue={projectData.title}
                    inputRef={titleRef}
                />
                <TextField
                    label="Описание проекта"
                    defaultValue={projectData.description}
                    inputRef={descriptionRef}
                />
                <ChipInput chips={projectData.tags} inputRef={tagsRef}/>
                <Button width="container" type="accent" buttonType="submit">Сохранить</Button>
            </FormFeature>
        </ProjectEditWidgetContainer>
    );
}