import {Header, sizes, Text} from "@upfolio-project/upfolio-ui";
import {Box} from "@mui/material";
import styled from "styled-components";
import {registerDateToView} from "@/shared/utils/dataToView";


const UserInformationBox = styled(Box)`
    display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${sizes.xs};
`;

interface UserContactsProps {
    location?: string;
    registered: string;
    specialization?: string;
    experience?: string;
}

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const InfoRow = styled(Box)`
  display: block;
  & > * {
    display: inline;
  }
`;


const UserInformation = ({location, registered, specialization, experience}: UserContactsProps) => {
    const registeredHumanity = (new Date(registered).getDate()) ?
        registerDateToView(new Date(registered)) : undefined;
    return (
        <UserInformationBox>
            <Header size="s">Информация</Header>
            <InfoContainer>
                {Boolean(location?.length) &&
                    <InfoRow>
                        <Text size="m">Город: </Text>
                        <Text size="m">{location}</Text>
                    </InfoRow>
                }
                <InfoRow>
                    <Text size="m">На сайте: </Text>
                    <Text size="m">{registeredHumanity}</Text>
                </InfoRow>

                {Boolean(specialization?.length) &&
                    <InfoRow>
                        <Text size="m">Специализация: </Text>
                        <Text size="m">{specialization}</Text>
                    </InfoRow>
                }
                {Boolean(experience) &&
                    <InfoRow>
                        <Text size="m">Опыт</Text>
                        <Text size="m">{experience}</Text>
                    </InfoRow>
                }
            </InfoContainer>
        </UserInformationBox>
    );
};

export {UserInformation};