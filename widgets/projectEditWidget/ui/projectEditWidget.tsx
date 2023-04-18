import styled from "styled-components";
import {Box} from "@mui/material";
import {ChipInput, Input, TextField} from "@/shared/ui/input";
import {useEditProjectMutation, useGetProjectQuery} from "@/shared/api/projects/projects";
import {FormFeature} from "@/features/formFeature";
import {useRef} from "react";
import {Button} from "@/shared/ui/button";
import {Message} from "@/shared/ui/message";

interface ProjectEditWidgetProps {
    uuid: string
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

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);

    const [editProject, {status, isError, error}] = useEditProjectMutation();

    if (getProjectLoading || !projectData) return <></>;
    const projectError = error as any;

    return (
        <ProjectEditWidgetContainer>
                <FormFeature onSubmit={(e) => {
                    e.preventDefault();
                    editHandler();
                }}
                >
                    {isError && <Message title="Произошла ошибка" description={projectError && projectError?.data?.text} severity="error"/>}
                    {status === "fulfilled" && <Message title="Сохранено" description="Данные успешно сохранены" severity="success"/>}

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