import {Box} from "@mui/material";
import {sizes} from "@/shared/styles";
import {Tag} from "@/shared/ui/tag/styles/tag";
import React from "react";

const Tags = ({tags}: { tags: string[] | undefined }) => {
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
                <Tag key={tag} value={tag} link="#"/>
            ))}
        </Box>
    );
};

export {Tags};
