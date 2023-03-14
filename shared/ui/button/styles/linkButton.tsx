import {ButtonUI} from "@/shared/ui/button/styles/button";
import {Text} from "@/shared/ui/text";
import React from "react";


interface LinkButtonProps {
    type?: "default" | "success";
    fill?: boolean;
    children?: React.ReactNode;
    width?: "content" | "container"
    href: string
}

export const LinkButton = (props: LinkButtonProps) => {
    return (
        <ButtonUI as="a"
                  href={props.href}
                  t={props.type}
                  fill={(props.fill === undefined || props.fill) ? "1" : "0"}
                  w={props.width}
        >
            {<Text size="m">{props.children}</Text>}
        </ButtonUI>
    );
};