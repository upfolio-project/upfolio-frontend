import {Avatar} from "@/shared/ui/avatar";
import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "./shared";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Box} from "@mui/material";
import {Link} from "@/shared/ui/link";
import styled from "styled-components";

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const TagItem = styled.span`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;

interface AboutUserProps {
    profilePhotoUrl: string
    firstName: string
    lastName: string
    dateOfBirth: string | null
    tags: string[]
    status: ProfileModelStatus
}

function dateOfBirthToAgeString(dateOfBirth: Date) {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear() -
        Number((today.getMonth() * 100 + today.getDate()) <= (dateOfBirth.getMonth() * 100 + dateOfBirth.getDate()));

    if (age % 10 >= 5 || (age >= 5 && age <= 20) || age % 10 === 0) {
        return `${age} лет`;
    }
    if (age % 10 >= 2 && age % 10 <= 4) {
        return `${age} года`;
    }
    return `${age} год`;
}


function statusToString(status: ProfileModelStatus | undefined) {
    switch (status) {
        case ProfileModelStatus.NOT_LOOKING_FOR_JOB:
            return "Не ищу работу";
        case ProfileModelStatus.LOOKING_FOR_JOB:
            return "Ищу работу";
        case ProfileModelStatus.FOUND_JOB:
            return "Нашёл работу";
        default:
            return "";
    }
}

const Tags = ({tags}: { tags: string[] | undefined }) => {
    if (!tags || !tags.length) {
        return <></>;
    }
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="4px"
        >
            {tags && tags.map((tag, index) => (
                <TagItem key={tag}>
                    <Link href="#" size="s" type="defaultLight" as="span">
                        {tag}
                    </Link>
                    {index !== tags.length - 1 && <Text as="span" size="s" type="success" key={`${tag}-after`}> · </Text>}
                </TagItem>
            ))}
        </Box>
    );
};

const AboutUser = ({profilePhotoUrl, firstName, lastName, dateOfBirth, tags, status}: AboutUserProps) => {
    const ageHumanity = (new Date(dateOfBirth || "").getDate()) ?
        dateOfBirthToAgeString(new Date(dateOfBirth || "")) : undefined;

    const statusString = statusToString(status);
    return (
        <Wrapper>
            <Avatar src={profilePhotoUrl}/>
            <InfoContainer>
                <Header size="s" style="bold">
                    {firstName} {lastName}
                </Header>
                {!!(new Date(dateOfBirth || "").getDate()) && <Text size="m">{ageHumanity}</Text>}
                <Text size="m" type="success">{statusString}</Text>
                <Tags tags={tags}/>
            </InfoContainer>
        </Wrapper>
    );
};

export {AboutUser};