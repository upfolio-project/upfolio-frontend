import {Box} from "@mui/material";
import styled from "styled-components";
import {Skeleton} from "./skeleton";
import {AboutUser, UserContacts, UserInformation} from "@/entities/userData";
import {sizes} from "@/shared/styles";
import {ProfileModel} from "@/shared/api/entities";

const UserDataStyled = styled(Box)`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: ${sizes.s};
`;

interface UserWidgetProps {
    profile: ProfileModel | undefined;
    isLoading: boolean
}

const UserWidget = ({profile, isLoading}: UserWidgetProps) => {

    if (isLoading || !profile) return <Skeleton/>;

    return (
        <>
            <UserDataStyled>
                <AboutUser
                    profilePhotoUrl={profile.profilePhotoUrl}
                    firstName={profile.realName.firstName}
                    lastName={profile.realName.lastName}
                    bio={profile.bio}
                    dateOfBirth={profile.dateOfBirth}
                    tags={profile?.tags || []}
                    status={profile.status}
                    registered={profile.registered}
                />
                <UserInformation
                    location={profile.location}
                    registered={profile.registered}
                    specialization={"Специалист"}
                    experience={""}
                    />
                <UserContacts/>
            </UserDataStyled>
        </>
    );
};

export {UserWidget};