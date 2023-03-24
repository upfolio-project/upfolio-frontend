import {useGetMeQuery, useGetProfileQuery} from "@/shared/api/profile/profile";
import {Box} from "@mui/material";
import styled from "styled-components";
import {borders, colors} from "@/styles/variables";
import {Skeleton} from "./skeleton";
import {AboutUser, UserBio, UserContacts} from "@/entities/userData";
import {useRouter} from "next/router";
import {useCallback, useEffect} from "react";

const PortfolioData = styled(Box)`
  width: 676px;
  border: ${borders.width2px(colors.colorSecondary05)};
  border-radius: ${borders.radius10};
  min-height: 120vw;
`;

const UserDataStyled = styled(Box)`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface UserWidgetProps {
    username: string;
}

const UserWidget = ({username}: UserWidgetProps) => {
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
        isLoading: getProfileLoading
    } = useGetProfileQuery({"username": currentUsername}, {skip: getMeLoading});

    const profile = userData?.profile;

    if (getProfileLoading || !profile) return <Skeleton/>;

    return (
        <>
            <UserDataStyled>
                <AboutUser
                    profilePhotoUrl={profile.profilePhotoUrl}
                    firstName={profile.realName.firstName}
                    lastName={profile.realName.lastName}
                    dateOfBirth={profile.dateOfBirth}
                    tags={profile.tags}
                    status={profile.status}
                />
                <UserBio bio={profile.bio}/>
                <UserContacts/>
            </UserDataStyled>
            <PortfolioData></PortfolioData>
        </>
    );
};

const UserWidgetStyled = ({username}: UserWidgetProps) => {
    return (
        <Box
            display="flex"
            gap="20px"
            justifyContent="center"
        >
            <UserWidget username={username}/>
        </Box>
    );
};

export {UserWidgetStyled as UserWidget};