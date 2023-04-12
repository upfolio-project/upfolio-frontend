import {useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import {Box} from "@mui/material";
import styled from "styled-components";
import {Skeleton} from "./skeleton";
import {AboutUser, UserContacts} from "@/entities/userData";
import {useRouter} from "next/router";
import {useCallback, useEffect} from "react";
import {Error404Entity} from "@/entities/error404Entity";
import {sizes} from "@/shared/styles";

const UserDataStyled = styled(Box)`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

interface UserWidgetProps {
    username: string;
}

const ProfileWidget = ({username}: UserWidgetProps) => {
    const {data: me, isLoading: getMeLoading, isError} = useGetMeQuery({});
    const router = useRouter();

    const authToLogin = useCallback(function () {
        if (isError && username === "me") {
            router.push("/login");
        }
    }, [isError, username, router]);

    useEffect(() => {
        authToLogin();
    }, [authToLogin]);


    const meString = me?.username || "";
    const currentUsername = username === "me" ? meString : username;

    const {
        data: userData,
        isLoading: getProfileLoading,
        isError: getProfileError
    } = useGetProfileQuery({"username": currentUsername}, {skip: getMeLoading});

    const profile = userData?.profile;

    if (getProfileError) return <Box position="absolute" top="200px"><Error404Entity/></Box>;
    if (getProfileLoading || !profile) return <Skeleton/>;

    return (
        <>
            <UserDataStyled>
                <AboutUser
                    profilePhotoUrl={profile.profilePhotoUrl}
                    firstName={profile.realName.firstName}
                    lastName={profile.realName.lastName}
                    bio={profile.bio}
                    dateOfBirth={profile.dateOfBirth}
                    tags={profile.tags}
                    status={profile.status}
                    registered={profile.registered}
                />
                <UserContacts/>
            </UserDataStyled>
        </>
    );
};

const UserWidgetStyled = ({username}: UserWidgetProps) => {
    return (
        <ProfileWidget username={username}/>
    );
};

export {UserWidgetStyled as UserWidget};