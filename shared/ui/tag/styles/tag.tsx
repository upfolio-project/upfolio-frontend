import styled from "styled-components";
import {borders, colors, sizes} from "@/shared/styles";
import {Link} from "@/shared/ui/link";
import React from "react";

const TagItem = styled.span`
  display: flex;
  align-items: baseline;
  height: ${sizes.s};
  background-color: ${colors.colorSecondary05};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  border-radius: ${borders.radius5};
`;

interface TagProps {
    value: React.ReactNode
    link?: string
}


const Tag = ({value, link}: TagProps) => {
    return (
        <TagItem>
            <Link href={link || ""} size="s" type="accent" as="span">
                {value}
            </Link>
        </TagItem>
    );
};

export {Tag};
