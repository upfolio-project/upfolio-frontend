import {Header, sizes, Text} from "@upfolio-project/upfolio-ui";
import styled from "styled-components";
import {Box} from "@mui/material";

interface UserBioProps {
    bio: string;
}

const BioText = styled(Text)`
  white-space: pre-line;
`;

const UserBioBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
`;

const UserBio = ({bio}: UserBioProps) => {
    return (
        <UserBioBox>
            <Header size="s">О себе</Header>
            <BioText size="m" type="default">{bio}</BioText>
        </UserBioBox>
    );
};

export {UserBio};