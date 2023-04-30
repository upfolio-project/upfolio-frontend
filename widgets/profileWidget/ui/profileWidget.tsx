import {Box} from "@mui/material";
import styled from "styled-components";
import {Skeleton} from "./skeleton";
import {AboutUser, UserBio, UserContacts, UserInformation} from "@/entities/userData";
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


const UserWidget = ({profile, isLoading}: UserWidgetProps) => {

    if (isLoading || !profile) return <Skeleton/>;

    return (
        <>
            <UserDataStyled>
                <AboutUser
                    profilePhotoUrl={profile.profilePhotoUrl}
                    firstName={profile.realName.firstName}
                    lastName={profile.realName.lastName}
                    dateOfBirth={profile.dateOfBirth}
                    tags={profile?.tags || []}
                    status={profile.status}
                />
                <UserInformation
                    location={profile.location}
                    registered={profile.registered}
                    specialization={"Специалист"}
                    experience={""}
                    />
                <UserBio bio={profile.bio}/>
                <UserContacts contacts={contacts}/>
            </UserDataStyled>
        </>
    );
};

export {UserWidget};