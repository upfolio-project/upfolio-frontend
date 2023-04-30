import styled from "styled-components";
import {borders, colors, sizes} from "@/shared/styles";
import React from "react";
import Link from "next/link";
import {Text} from "@/shared/ui/text";

const TagItem = styled(Link)<{ tt: "default" | "accent" }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: ${sizes.s};
  background-color: ${p => p.tt === "accent" ? colors.colorAccent : colors.colorSecondary05B};
  padding-left: ${sizes.xs};
  padding-right: ${sizes.xs};
  border-radius: ${borders.radius5};
  transition: .3s;

  &, & * {
    color: ${p => p.tt === "accent" ? colors.colorDominant : colors.colorAccent};
    transition: .3s;
  }
  
  & * {
    background-color: ${colors.colorTransparent} !important;
  }

  &:hover, a:hover span, & span:hover {
    color: ${p => p.tt === "accent" ? colors.colorDominant : colors.colorAccent} !important;
    background-color: ${p => p.tt === "accent" ? colors.colorAccent50B : colors.colorSecondary20B};
  }
`;

export interface TagProps {
    value: React.ReactNode;
    link?: string;
    tagType?: "default" | "accent";
}


const Tag = ({value, link, tagType}: TagProps) => {
    return (
        <TagItem tt={tagType || "default"} href={link || ""}>
            <Text size="s" as="span">{value}</Text>
        </TagItem>
    );
};

export {Tag};
