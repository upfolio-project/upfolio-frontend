import {Header, sizes, Text} from "@upfolio-project/upfolio-ui";
import styled from "styled-components";
import {Box} from "@mui/material";
import Link from "next/link";

interface Contact {
    name: string;
    url: string;
    placeholder: string;
}

interface UserContactsProps {
    contacts: Contact[][];
}

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

const InfoRow = styled(Box)`
  display: block;
  
  & > * {
    display: inline;
  }
`;

const UserContactsBox = styled(Box)`
  display: flex;
  gap: ${sizes.xs};
  flex-direction: column;
`;


const UserContacts = ({contacts}: UserContactsProps) => {
    return (
        <UserContactsBox>
            <Header size="s">Контакты</Header>
            <InfoContainer>
                {
                    contacts.map((contactBlock, index) => (
                        <Box key={index}>
                            {
                                contactBlock.map(contact => (
                                    <Link key={contact.name} href={contact.url}>
                                        <InfoRow>
                                            <Text size="m">{contact.name}: </Text>
                                            <Text size="m" type="accent">{contact.placeholder}</Text>
                                        </InfoRow>
                                    </Link>
                                ))
                            }
                        </Box>
                    ))
                }
            </InfoContainer>
        </UserContactsBox>
    );
};

export {UserContacts};