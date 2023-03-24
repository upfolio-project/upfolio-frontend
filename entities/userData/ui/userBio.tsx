import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "./shared";
import styled from "styled-components";

interface AboutUserProps {
    bio: string;
}

const BioText = styled(Text)`
  white-space: pre-line;
`;

const UserBio = ({bio}: AboutUserProps) => {
    return (
        <Wrapper>
            <Header size="s">Обо мне</Header>
            {bio && <BioText size="s" type="defaultLight">{bio}</BioText>}
        </Wrapper>
    );
};

export {UserBio};