import React, {useCallback, useEffect, useRef} from "react";
import {useRouter} from "next/router";

import {Box} from "@mui/material";
import styled from "styled-components";

import {useEditProfileMutation, useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {ProfileModelStatus} from "@/shared/api/entities";

import {Message, Button, ChipInput, DatePicker, Input, Select, TextField} from "@upfolio-project/upfolio-ui";
import {ProfileModelType} from "@/shared/api/entities/profile/profile";
import {useGetByUsernameQuery} from "@/shared/api/getByUsername/getByUsername";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
`;

const statuses = [
    {
        value: ProfileModelStatus.LOOKING_FOR_JOB,
        content: "Ищу работу",
        key: ProfileModelStatus.LOOKING_FOR_JOB
    },
    {
        value: ProfileModelStatus.NOT_LOOKING_FOR_JOB,
        content: "Не ищу работу",
        key: ProfileModelStatus.NOT_LOOKING_FOR_JOB
    },
    {
        value: ProfileModelStatus.FOUND_JOB,
        content: "Нашёл работу",
        key: ProfileModelStatus.FOUND_JOB
    }
];

const types: { value: ProfileModelType, content: string, key: string }[] = [
    {
        value: "PUBLIC",
        content: "Публичный",
        key: "PUBLIC"
    },
    {
        value: "CONTACTS_FOR_COMPANIES",
        content: "Контакты открыты для компаний",
        key: "CONTACTS_FOR_COMPANIES"
    },
    {
        value: "CONTACTS_HIDDEN",
        content: "Контакты скрыты",
        key: "CONTACTS_HIDDEN"
    },
    {
        value: "PRIVATE",
        content: "Приватный",
        key: "PRIVATE"
    }
];

const EditMeWidget = () => {
    const {data: me, isLoading: getMeLoading, isError} = useGetMeQuery({});
    const router = useRouter();

    const authToLogin = useCallback(function () {
        if (isError) {
            router.push("/login");
        }
    }, [isError, router]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);

    const {
        data: userData,
    } = useGetByUsernameQuery({"username": me?.username || ""}, {skip: getMeLoading || !me});
    const profile = userData && userData.userType === "SPECIALIST" && userData.specialist;

    const [editProfile, {error: regError}] = useEditProfileMutation();
    const error = regError as any;

    const usernameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const statusRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);

    function useOnClick() {
        if (!profile) return;
        editProfile({
            username: usernameRef?.current?.value || "",
            realName: {
                firstName: firstNameRef?.current?.value || "",
                lastName: lastNameRef?.current?.value || "",
            },
            status: statusRef?.current?.value as ProfileModelStatus,
            bio: bioRef?.current?.value || "",
            tags: tagsRef?.current?.value || [],
            dateOfBirth: dateRef?.current?.value || null,
            type: (typeRef?.current?.value || profile.type) as ProfileModelType,
            location: locationRef?.current?.value || null
        });
        router.push("/" + usernameRef?.current?.value || "");
    }

    if (!profile) return <></>;

    return (
        <Container>
            {error && <Message title="Произошла ошибка"
                               description={GetErrorDescription(error?.data?.text)}
                               severity="error"/>}
            <Box width="600px" display="flex" flexDirection="column" gap="20px">
                <Input
                    label="Username"
                    defaultValue={profile.username}
                    inputRef={usernameRef}
                />
                <Box display="flex" gap="20px">
                    <Input
                        label="Имя"
                        defaultValue={profile.realName.firstName}
                        inputRef={firstNameRef}
                    />
                    <Input
                        label="Фамилия"
                        defaultValue={profile.realName.lastName}
                        inputRef={lastNameRef}
                    />
                </Box>
                <TextField defaultValue={profile.bio} inputRef={bioRef}/>
                <Box display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                    <DatePicker label="Дата рождения"
                                defaultValue={profile.dateOfBirth}
                                inputRef={dateRef}
                    />

                    <Select<ProfileModelStatus>
                        items={statuses}
                        id="status-select"
                        label="Статус"
                        inputRef={statusRef}
                        defaultValue={profile.status}
                    />
                </Box>
                <Select<ProfileModelType>
                    items={types}
                    id="type-select"
                    label="Тип профиля"
                    inputRef={typeRef}
                    defaultValue={profile.type}
                />
                <Input
                    label="Город"
                    defaultValue={profile.location}
                    inputRef={locationRef}
                />
                <ChipInput chips={profile.tags} placeholder="Введите тег" inputRef={tagsRef} label="Теги"
                           maxCount={15}/>
                <Button width="container" type="accent" onClick={useOnClick}>Сохранить</Button>
            </Box>
        </Container>
    );
};

export {EditMeWidget};