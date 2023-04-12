import {Box} from "@mui/material";
import {sizes} from "@/shared/styles";
import {Tag, TagProps} from "@/shared/ui/tag/styles/tag";
import React from "react";

interface TagsProps {
    tags: TagProps[] | undefined
    tagType?: "default" | "accent"
}

const Tags = ({tags}: TagsProps) => {
    if (!tags || !tags.length) {
        return <></>;
    }
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={sizes.xxs}
        >
            {tags && tags.map((tag) => (
                <Tag key={tag.value + (tag.link || "")} value={tag.value} link={tag.link}/>
            ))}
        </Box>
    );
};

export {Tags};
