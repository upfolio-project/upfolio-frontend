import {Avatar} from "@/shared/ui/avatar";
import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "@/shared/styles/wrapper";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Box} from "@mui/material";
import styled from "styled-components";
import {borders, colors, sizes} from "@/shared/styles";
import {dateOfBirthToView, registerDateToView, userStatusToView} from "@/shared/utils/dataToView";
import {Tags} from "@/shared/ui/tag";
import {messengers, Messengers} from "@/shared/ui/messengers/styles/messengers";

const StatusTag = styled.div`
  height: 18px;
  background-color: ${colors.colorSuccess10};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  display: flex;
  align-items: center;
  border-radius: ${borders.radius5};
`;

const BioText = styled(Text)`
  white-space: pre-line;
`;


const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.s};
`;

interface AboutUserProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
    bio: string;
    dateOfBirth: string | null;
    tags: string[];
    status: ProfileModelStatus;
    registered: string
}

const mockMessengers = [
    {
        name: messengers.dribbble,
        url: "#"
    },
    {
        name: messengers.behance,
        url: "#"
    },
    {
        name: messengers.github,
        url: "#"
    },
    {
        name: messengers.telegram,
        url: "#"
    },
];

const AboutUser = ({profilePhotoUrl, firstName, lastName, bio, dateOfBirth, tags, status, registered}: AboutUserProps) => {
    const ageHumanity = (new Date(dateOfBirth || "").getDate()) ?
        dateOfBirthToView(new Date(dateOfBirth || "")) : undefined;

    const registeredHumanity = (new Date(registered).getDate()) ?
        registerDateToView(new Date(registered)) : undefined;

    const statusString = userStatusToView(status);

    return (
        <Wrapper>
            <Avatar src={profilePhotoUrl}/>
            <InfoContainer>
                <Box display="flex" flexDirection="column" gap={sizes.xxs} alignItems="center">
                    <Header size="s" style="bold" align="center">
                        {firstName} {lastName}
                    </Header>
                    {ageHumanity && <Text size="m">{ageHumanity}</Text>}
                </Box>
                <StatusTag>
                    <Text size="s" type="success">{statusString}</Text>
                </StatusTag>
                <Tags tags={tags}/>
                {bio && <BioText size="s" type="defaultLight">{bio}</BioText>}
                {registeredHumanity &&
                    <Text size="s" type="defaultLight" align="center">
                        Зарегистрирован <Text size="s" type="accent" as="span">{registeredHumanity}</Text>
                    </Text>
                }
                <Messengers messengers={mockMessengers}/>
            </InfoContainer>
        </Wrapper>
    );
};

export {AboutUser};