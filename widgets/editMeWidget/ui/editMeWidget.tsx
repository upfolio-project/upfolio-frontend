import {Box} from "@mui/material";
import styled from "styled-components";
import {useEditProfileMutation, useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import {ChipInput, DatePicker, Input, Select, TextField} from "@/shared/ui/input";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Button} from "@/shared/ui/button";
import React, {useRef} from "react";

const Container = styled(Box)`
  width: 100vw;
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

const EditMeWidget = () => {
    const {data: me, isLoading: getMeLoading} = useGetMeQuery({});

    const {
        data: userData,
    } = useGetProfileQuery({"username": me?.username || ""}, {skip: getMeLoading || !me});
    const profile = userData?.profile;

    const [editProfile] = useEditProfileMutation();

    const usernameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const statusRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);

    function onClick() {
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
            type: profile.type
        });
    }

    if (!profile) return <></>;

    return (
        <Container>

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
                <ChipInput chips={profile.tags} placeholder="Введите тег" inputRef={tagsRef} label="Теги" maxCount={15}/>
                <Button width="container" type="success" onClick={() => onClick()}>Сохранить</Button>
            </Box>
        </Container>
    );
};

export {EditMeWidget};