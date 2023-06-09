import {Avatar, Header, Text, Tag, sizes} from "@upfolio-project/upfolio-ui";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Box} from "@mui/material";
import styled from "styled-components";
import {dateOfBirthToView, userStatusToView} from "@/shared/utils/dataToView";
import {useGetMe, useGetPathRoute} from "@/shared/hooks";

const UserInfo = styled(Box)`
  display: grid;  
  gap: ${sizes.s};

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto;
    grid-template-rows: fit-content(0);
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: auto;
    grid-template-rows: fit-content(0);
  }
`;

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  gap: ${sizes.xs};
`;

const Settings = styled(Box)`
  display: block;
  width: max-content;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  transform: translateY(50%);
`;

interface AboutUserProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string | null;
    tags: string[];
    status: ProfileModelStatus;
    specialization: string;
}

const AboutUser = ({
                       profilePhotoUrl,
                       firstName,
                       lastName,
                       dateOfBirth,
                       tags,
                       status,
                       specialization
                   }: AboutUserProps) => {
    const ageHumanity = (new Date(dateOfBirth || "").getDate()) ?
        dateOfBirthToView(new Date(dateOfBirth || "")) : undefined;

    const {me} = useGetMe();
    const username = useGetPathRoute();
    const statusString = userStatusToView(status);

    return (
        <UserInfo>
            <Box position="relative" width="max-content" height="max-content">
                <Avatar src={profilePhotoUrl}/>
                {me?.username && me?.username === username &&
                    <Settings><Tag value="Редактировать" link="/edit/profile" tagType="accent"/></Settings>}
            </Box>
            <InfoContainer>
                <Header size="s">
                    {firstName} {lastName}
                </Header>
                {ageHumanity && <Text size="m">{ageHumanity}</Text>}
                {(statusString && specialization) &&
                    <span><Text size="m" as="span">{specialization} — </Text><Text size="m" type="accent"
                                                                                   as="span">{statusString}</Text></span>}
                {tags.length > 0 && <Text>{tags.join(", ")}</Text>}
            </InfoContainer>
        </UserInfo>
    );
};

export {AboutUser};