import {Box} from "@mui/material";
import {sizes} from "@/shared/styles";
import {Tag, TagProps} from "@/shared/ui/tag/styles/tag";
import React from "react";

interface TagsProps {
    tags: TagProps[] | undefined
    tagType?: "default" | "accent"
    align?: "left" | "center" | "right"
}

const Tags = ({tags, align, tagType}: TagsProps) => {
    if (!tags || !tags.length) {
        return <></>;
    }
    return (
        <Box
            display="inline-flex"
            flexWrap="wrap"
            justifyContent={align || "center"}
            gap={sizes.xxs}
        >
            {tags && tags.map((tag) => (
                <Tag tagType={tagType} key={tag.value + (tag.link || "")} value={tag.value} link={tag.link}/>
            ))}
        </Box>
    );
};

export {Tags};
