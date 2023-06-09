import {Box} from "@mui/material";
import styled from "styled-components";

import {ProfileModel} from "@/shared/api/entities";
import {Skeleton} from "./skeleton";
import {AboutUser, UserBio, UserContacts, UserInformation} from "@/entities/userData";

import {sizes} from "@upfolio-project/upfolio-ui";

interface UserWidgetProps {
    profile: ProfileModel | undefined;
    isLoading: boolean;
}

const contacts = [
    [
        {
            name: "Телеграм",
            placeholder: "@gaskeo",
            url: "#"
        },
        {
            name: "Вконтакте",
            placeholder: "@gasss",
            url: "#"
        }
    ],
    [
        {
            name: "Сайт",
            placeholder: "zeytu.space",
            url: "#"
        },
        {
            name: "Почта",
            placeholder: "tema@zeytu.space",
            url: "#"
        },
        {
            name: "Телефон",
            placeholder: "+7 999 999 99 99",
            url: "#"
        }
    ],
    [
        {
            name: "Behance",
            placeholder: "gaskeo",
            url: "#"
        },
        {
            name: "Dribbble",
            placeholder: "gaskeo",
            url: "#"
        },
        {
            name: "Github",
            placeholder: "gaskeo",
            url: "#"
        }
    ]
];

const RightUserInfo = styled(Box)`
  display: flex;
  gap: ${sizes.m};
  flex-direction: column;
  
  @media screen and (max-width: 834px) {
    margin-top: ${sizes.m};
  }
`;


const UserWidget = ({profile, isLoading}: UserWidgetProps) => {

    if (isLoading || !profile) return <Skeleton/>;

    return (
        <>
            <AboutUser
                profilePhotoUrl={profile.profilePhotoUrl}
                firstName={profile.realName.firstName}
                lastName={profile.realName.lastName}
                dateOfBirth={profile.dateOfBirth}
                tags={profile?.tags || []}
                status={profile.status}
                specialization={"Специалист"}
            />
            <RightUserInfo>
                <UserInformation
                    location={profile.location}
                    registered={profile.registered}
                    experience={""}
                />
                <UserBio bio={profile.bio}/>
                <UserContacts contacts={contacts}/>
            </RightUserInfo>
        </>
    );
};

export {UserWidget};