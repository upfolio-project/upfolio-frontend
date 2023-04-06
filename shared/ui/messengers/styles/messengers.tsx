import dribbble from "@/shared/elements/icons/social/dribbble.svg";
import github from "@/shared/elements/icons/social/github.svg";
import telegram from "@/shared/elements/icons/social/telegram.svg";
import behance from "@/shared/elements/icons/social/behance.svg";

import Image from "next/image";
import {Box} from "@mui/material";
import styled from "styled-components";
import {sizes} from "@/styles/variables";
import {Link} from "@/shared/ui/link";

export enum messengers {
    dribbble,
    github,
    telegram,
    behance
}


const messengerToSvg = {
    [messengers.dribbble]: dribbble,
    [messengers.github]: github,
    [messengers.telegram]: telegram,
    [messengers.behance]: behance
};

interface Messenger {
    name: messengers;
    url: string;
}

const MessengersContainer = styled(Box)`
  display: flex;
  gap: ${sizes.xxs};
`;

interface MessengersProps {
    messengers: Messenger[];
}

const Messengers = ({messengers}: MessengersProps) => {
    return (
        <MessengersContainer>
            {messengers.map(messenger => (
                <Link key={messenger.url + messenger.name} as="span" href={messenger.url}>
                    <Image
                        src={messengerToSvg[messenger.name]}
                        alt={messenger.name.toString()}
                        width={20}
                        height={20}
                    />
                </Link>
            ))}
        </MessengersContainer>
    );
};

export {Messengers};
