import React, {RefObject, useCallback, useEffect, useRef} from "react";
import {useRouter} from "next/router";

import {Box} from "@mui/material";
import styled from "styled-components";

import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {ProfileModelStatus} from "@/shared/api/entities";

import {Message, Button, ChipInput, DatePicker, Input, Select, TextField} from "@upfolio-project/upfolio-ui";
import {ProfileModelType} from "@/shared/api/entities/profile/profile";
import {useChangeUsernameMutation, useGetByUsernameQuery, useGetMeQuery} from "@/shared/api/username/username";
import {useEditSpecialistMutation} from "@/shared/api/specialist/specialist";
import {useUploadPhotoMutation} from "@/shared/api/photoUpload/uploadPhoto";

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

interface Fields {
    imageRef: RefObject<HTMLInputElement>
    usernameRef: RefObject<HTMLInputElement>;
    firstNameRef: RefObject<HTMLInputElement>;
    lastNameRef: RefObject<HTMLInputElement>;
    bioRef: RefObject<HTMLInputElement>;
    dateRef: RefObject<HTMLInputElement>;
    statusRef: RefObject<HTMLInputElement>;
    typeRef: RefObject<HTMLInputElement>;
    locationRef: RefObject<HTMLInputElement>;
    tagsRef: RefObject<{ value: string[] | null } | null>;
}

function useFields(): Fields {
    const imageRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const statusRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<{ value: string[] | null } | null>(null);
    return {
        imageRef,
        usernameRef,
        firstNameRef,
        lastNameRef,
        bioRef,
        dateRef,
        statusRef,
        typeRef,
        locationRef,
        tagsRef,
    };
}

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

    const [editProfile, {error: regError}] = useEditSpecialistMutation();
    const [editUsername, {error: usernameError}] = useChangeUsernameMutation();
    const [uploadPhoto] = useUploadPhotoMutation();

    const error = regError as any || usernameError as any;

    const fieldRefs = useFields();

    function useOnClick() {
        if (!profile) return;
        if (fieldRefs.usernameRef?.current?.value && fieldRefs.usernameRef?.current?.value !== me?.username) {
            editUsername({newUsername: fieldRefs.usernameRef?.current?.value || ""});
        }
        editProfile({
            realName: {
                firstName: fieldRefs.firstNameRef?.current?.value || "",
                lastName: fieldRefs.lastNameRef?.current?.value || "",
            },
            status: fieldRefs.statusRef?.current?.value as ProfileModelStatus,
            bio: fieldRefs.bioRef?.current?.value || "",
            tags: fieldRefs.tagsRef?.current?.value || [],
            dateOfBirth: fieldRefs.dateRef?.current?.value || null,
            type: (fieldRefs.typeRef?.current?.value || profile.type) as ProfileModelType,
            location: fieldRefs.locationRef?.current?.value || null
        });

        if (fieldRefs.imageRef.current?.files?.length) {
            const fr = new FileReader();
            fr.onload = () => {
                const image = new Image();
                image.onload = () => {
                    if (fieldRefs.imageRef.current?.files?.[0] && fieldRefs.imageRef.current.files[0] !== null) {
                        const [width, height] = [image.width, image.height];
                        const minDimension = Math.min(width, height);
                        const offsetX = Math.round((width - minDimension) / 2);
                        const offsetY = Math.round((height - minDimension) / 2);
                        const form = new FormData();
                        form.append("file", fieldRefs.imageRef.current.files[0], fieldRefs.imageRef.current.files[0].name);
                        uploadPhoto({cropX: offsetX, cropY: offsetY, side: minDimension, form: form});
                    }
                };

                image.src = fr.result as string;
            };
            fr.readAsDataURL(fieldRefs.imageRef.current.files[0]);
        } else {
            router.push("/" + fieldRefs.usernameRef?.current?.value || "");
        }
    }

    if (!profile) return <></>;

    return (
        <Container>
            {error && <Message title="Произошла ошибка"
                               description={GetErrorDescription(error?.data?.text)}
                               severity="error"/>}
            <Box width="600px" display="flex" flexDirection="column" gap="20px">
                <input type="file" accept="image/png, image/jpeg" ref={fieldRefs.imageRef}/>
                <Input
                    label="Username"
                    defaultValue={userData.username}
                    inputRef={fieldRefs.usernameRef}
                />
                <Box display="flex" gap="20px">
                    <Input
                        label="Имя"
                        defaultValue={profile.realName.firstName}
                        inputRef={fieldRefs.firstNameRef}
                    />
                    <Input
                        label="Фамилия"
                        defaultValue={profile.realName.lastName}
                        inputRef={fieldRefs.lastNameRef}
                    />
                </Box>
                <TextField defaultValue={profile.bio} inputRef={fieldRefs.bioRef}/>
                <Box display="grid" gap="20px" gridTemplateColumns="1fr 1fr">
                    <DatePicker label="Дата рождения"
                                defaultValue={profile.dateOfBirth}
                                inputRef={fieldRefs.dateRef}
                    />

                    <Select<ProfileModelStatus>
                        items={statuses}
                        id="status-select"
                        label="Статус"
                        inputRef={fieldRefs.statusRef}
                        defaultValue={profile.status}
                    />
                </Box>
                <Select<ProfileModelType>
                    items={types}
                    id="type-select"
                    label="Тип профиля"
                    inputRef={fieldRefs.typeRef}
                    defaultValue={profile.type}
                />
                <Input
                    label="Город"
                    defaultValue={profile.location}
                    inputRef={fieldRefs.locationRef}
                />
                <ChipInput chips={profile.tags} placeholder="Введите тег" inputRef={fieldRefs.tagsRef} label="Теги"
                           maxCount={15}/>
                <Button width="container" type="accent" onClick={useOnClick}>Сохранить</Button>
            </Box>
        </Container>
    );
};

export {EditMeWidget};