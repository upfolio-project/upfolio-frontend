import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "@/shared/styles";
import styled from "styled-components";

interface UserBioProps {
    bio: string;
}

const BioText = styled(Text)`
  white-space: pre-line;
`;

const UserBio = ({bio}: UserBioProps) => {
    return (
        <Wrapper>
            <Header size="s">О себе</Header>
            <BioText size="s" type="default">{bio}</BioText>
        </Wrapper>
    );
};

export {UserBio};