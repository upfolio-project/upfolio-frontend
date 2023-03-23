import {ButtonUI} from "@/shared/ui/button/styles/button";
import {Text} from "@/shared/ui/text";
import React from "react";
import Link, {LinkProps} from "next/link";

interface LinkWithoutAsProps extends Omit<LinkProps, "as"> {
    as: ({ ...props }: LinkWithoutAsProps) => JSX.Element
}

const LinkWithoutAs = ({...props}: LinkWithoutAsProps) => <Link {...props} as=""/>;

interface LinkButtonProps {
    type?: "default" | "success";
    fill?: boolean;
    children?: React.ReactNode;
    width?: "content" | "container"
    href: string
}

export const LinkButton = (props: LinkButtonProps) => {
    return (
        <ButtonUI as={LinkWithoutAs}
                  href={props.href}
                  t={props.type}
                  fill={(props.fill === undefined || props.fill) ? "1" : "0"}
                  w={props.width}
        >
            <Text size="m" style="bold">{props.children}</Text>
        </ButtonUI>
    );
};