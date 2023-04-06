import {Avatar as MUIAvatar} from "@mui/material";
import {sizes} from "@/styles/variables";

interface AvatarProps {
    src: string
}

const Avatar = ({src}: AvatarProps) => {
    return (
        <MUIAvatar src={src} sx={{width: 'auto', height: '154px', aspectRatio: '1/1', borderRadius: sizes.s}}/>
    );
};

export {Avatar};