import {Avatar} from "@/shared/ui/avatar";
import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "./shared";
import {ProfileModelStatus} from "@/shared/api/entities";
import {Box} from "@mui/material";
import {Link} from "@/shared/ui/link";
import styled from "styled-components";
import {borders, colors, sizes} from "@/styles/variables";


function dateOfBirthToAgeString(dateOfBirth: Date) {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear() -
        Number((today.getMonth() * 100 + today.getDate()) <= (dateOfBirth.getMonth() * 100 + dateOfBirth.getDate()));

    return ageString(age);
}

function ageString(age: number) {
    if (age % 10 >= 5 || (age >= 5 && age <= 20) || age % 10 === 0) {
        return `${age} лет`;
    }
    if (age % 10 >= 2 && age % 10 <= 4) {
        return `${age} года`;
    }
    return `${age} год`;
}

function monthString(month: number) {
    if (month % 10 >= 5 || (month >= 5 && month <= 20) || month % 10 === 0) {
        return `${month} месяцев`;
    }
    if (month % 10 >= 2 && month % 10 <= 4) {
        return `${month} месяца`;
    }
    return `${month} месяц`;
}

function weekString(week: number) {
    if (week % 10 >= 5 || (week >= 5 && week <= 20) || week % 10 === 0) {
        return `${week} недель`;
    }
    if (week % 10 >= 2 && week % 10 <= 4) {
        return `${week} недели`;
    }
    return `${week} неделю`;
}

function dayString(week: number) {
    if (week % 10 >= 5 || (week >= 5 && week <= 20) || week % 10 === 0) {
        return `${week} дней`;
    }
    if (week % 10 >= 2 && week % 10 <= 4) {
        return `${week} дня`;
    }
    return `${week} день`;
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

function registerToString(registerDate: Date) {
    const now = new Date();

    if (!registerDate || !now) {
        return undefined;
    }
    const agesPass = now.getFullYear() - registerDate.getFullYear() -
        Number((now.getMonth() * 100 + now.getDate()) <= (registerDate.getMonth() * 100 + registerDate.getDate()));

    if (agesPass > 0)
        return `${ageString(now.getFullYear() - registerDate.getFullYear())} назад`;

    const monthsPass = now.getMonth() - registerDate.getMonth() +
        (now.getFullYear() - registerDate.getFullYear()) * 12 -
        Number(now.getDate() < registerDate.getDate());

    if (monthsPass > 0)
        return `${monthString(monthsPass)} назад`;

    const weeksPass = Math.floor((now.valueOf() - registerDate.valueOf()) / 1000 / 60 / 60 / 24 / 7);

    if (weeksPass > 0) {
        return `${weekString(weeksPass)} назад`;
    }

    const daysPass = Math.floor(
        (now.valueOf() - registerDate.valueOf()) / 1000 / 60 / 60 / 24);

    if (daysPass > 0) {
        return `${dayString(daysPass)} назад`;
    }

    return "сегодня";
}

const StatusTag = styled.div`
  height: 18px;
  background-color: ${colors.colorSuccess10};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  display: flex;
  align-items: center;
  border-radius: ${borders.radius5};
`;

const TagItem = styled.span`
  display: flex;
  align-items: baseline;
  height: ${sizes.s};
  background-color: ${colors.colorSecondary05};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  border-radius: ${borders.radius5};
`;
const Tags = ({tags}: { tags: string[] | undefined }) => {
    if (!tags || !tags.length) {
        return <></>;
    }
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={sizes.xxs}
        >
            {tags && tags.map((tag) => (
                <TagItem key={tag}>
                    <Link href="#" size="s" type="accent" as="span">
                        {tag}
                    </Link>
                </TagItem>
            ))}
        </Box>
    );
};


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

const AboutUser = ({profilePhotoUrl, firstName, lastName, bio, dateOfBirth, tags, status, registered}: AboutUserProps) => {
    const ageHumanity = (new Date(dateOfBirth || "").getDate()) ?
        dateOfBirthToAgeString(new Date(dateOfBirth || "")) : undefined;

    const registeredHumanity = (new Date(registered).getDate()) ?
        registerToString(new Date(registered)) : undefined;

    const statusString = statusToString(status);
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
            </InfoContainer>
        </Wrapper>
    );
};

export {AboutUser};