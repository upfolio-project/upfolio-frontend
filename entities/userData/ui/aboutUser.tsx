import {Avatar} from "@/shared/ui/avatar";
import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "@/shared/styles/wrapper";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Box} from "@mui/material";
import styled from "styled-components";
import {borders, colors, sizes} from "@/shared/styles";
import {dateOfBirthToView, userStatusToView} from "@/shared/utils/dataToView";
import {Tag, Tags} from "@/shared/ui/tag";
import {useGetMe, useGetPathRoute} from "@/shared/hooks";

const StatusTag = styled.div`
  height: 18px;
  background-color: ${colors.colorSuccess10};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  display: flex;
  align-items: center;
  border-radius: ${borders.radius5};
`;

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.s};
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
}

const AboutUser = ({profilePhotoUrl, firstName, lastName, dateOfBirth, tags, status}: AboutUserProps) => {
    const ageHumanity = (new Date(dateOfBirth || "").getDate()) ?
        dateOfBirthToView(new Date(dateOfBirth || "")) : undefined;

    const {me} = useGetMe();
    const username = useGetPathRoute();
    const statusString = userStatusToView(status);

    return (
        <Wrapper>
            <Box position="relative">
                <Avatar src={profilePhotoUrl}/>
                {me?.username && me?.username === username && <Settings><Tag value="Редактировать" link="/edit/profile" tagType="accent"/></Settings>}
            </Box>
            <InfoContainer>
                <Box display="flex" flexDirection="column" gap={sizes.xxs} alignItems="center">
                    <Header size="s" style="bold" align="center">
                        {firstName} {lastName}
                    </Header>
                    {ageHumanity && <Text size="m">{ageHumanity}</Text>}
                </Box>
                {statusString && <StatusTag><Text size="s" type="success">{statusString}</Text></StatusTag>}
                {tags.length > 0 && <Tags tags={tags.map(tag => ({value: tag, link: "#"}))}/>}
            </InfoContainer>
        </Wrapper>
    );
};

export {AboutUser};