import {Header, Text} from "@/shared/ui/text";
import {Wrapper} from "./shared";

interface UserContactsProps {

}

const UserContacts = (props: UserContactsProps) => {
    return (
        <Wrapper>
            <Header size="s">Контакты</Header>
            <Text size="s" type="defaultLight" {...props}>...</Text>
        </Wrapper>
    );
};

export {UserContacts};