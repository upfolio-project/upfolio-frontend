import styled from "styled-components";
import {borders, colors, sizes} from "@/shared/styles";
import {Link} from "@/shared/ui/link";
import React from "react";

const TagItem = styled.span<{tagType: "default" | "accent"}>`
  display: flex;
  align-items: baseline;
  height: ${sizes.s};
  background-color: ${p => p.tagType === "accent" ? colors.colorAccent : colors.colorSecondary05};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  border-radius: ${borders.radius5};
  &, & * {
    color: ${p => p.tagType === "accent" ? colors.colorDominant : colors.colorAccent};
  }
`;

export interface TagProps {
    value: React.ReactNode
    link?: string
    tagType?: "default" | "accent"
}


const Tag = ({value, link, tagType}: TagProps) => {
    return (
        <TagItem tagType={tagType || "default"}>
            <Link href={link || ""} size="s"  as="span">
                {value}
            </Link>
        </TagItem>
    );
};

export {Tag};
