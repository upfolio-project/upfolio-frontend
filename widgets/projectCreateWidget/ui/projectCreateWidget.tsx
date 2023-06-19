import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

import styled from "styled-components";
import {Box} from "@mui/material";

import {useCreateProjectMutation} from "@/shared/api/projects/projects";
import {FormFeature} from "@/features/formFeature";

import {Header, Message, ChipInput, Input, TextField, Button} from "@upfolio-project/upfolio-ui";
import {useGetMe} from "@/shared/hooks";

const Container = styled(Box)`
`;

export default function ProjectCreateWidget() {
    const router = useRouter();
    const createHandler = () => {
        return createProject({
            title: titleRef.current?.value || "",
            description: descriptionRef.current?.value || "",
            tags: tagsRef?.current?.value || []
        });
    };


    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);
    const {me} = useGetMe();

    const [createProject, {data, status, isError, error}] = useCreateProjectMutation();

    useEffect(() => {
        if (data?.uuid) {
            router.push(`${me?.username}/${data.uuid}`);
        }
    }, [data, router, me?.username]);

    const projectError = error as any;
    return (
        <Container>
            <FormFeature onSubmit={(e) => {
                e.preventDefault();
                createHandler();
            }}
            >
                {isError && <Message title="Произошла ошибка" description={projectError && projectError?.data?.text}
                                     severity="error"/>}
                {status === "fulfilled" &&
                    <Message title="Сохранено" description="Данные успешно сохранены" severity="success"/>}
                <Header size="s">Создать проект</Header>

                <Input
                    label="Название проекта"
                    placeholder="Мой проект"
                    inputRef={titleRef}
                />
                <TextField
                    label="Описание проекта"
                    inputRef={descriptionRef}
                />
                <ChipInput label="Теги" chips={[]} inputRef={tagsRef}/>
                <Button width="container" fill={false} type="accent" buttonType="submit">Создать проект</Button>
            </FormFeature>
        </Container>
    );
}