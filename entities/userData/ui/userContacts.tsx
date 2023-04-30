import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "@/shared/styles";
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
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const UserContacts = ({contacts}: UserContactsProps) => {
    return (
        <Wrapper>
            <Header size="s">Контакты</Header>
            <InfoContainer>
                {
                    contacts.map((contactBlock, index) => (
                        <Box key={index}>
                            {
                                contactBlock.map(contact => (
                                    <Link key={contact.name} href={contact.url}>
                                        <InfoRow>
                                            <Text size="s" type="defaultLight">{contact.name}</Text>
                                            <Text size="s" type="accent">{contact.placeholder}</Text>
                                        </InfoRow>
                                    </Link>
                                ))
                            }
                        </Box>
                    ))
                }
            </InfoContainer>
        </Wrapper>
    );
};

export {UserContacts};