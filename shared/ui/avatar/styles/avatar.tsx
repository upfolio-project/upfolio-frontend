import {Avatar as MUIAvatar} from "@mui/material";

interface AvatarProps {
    src: string
}

const Avatar = ({src}: AvatarProps) => {
    return (
        <MUIAvatar src={src} sx={{width: 'auto', height: '154px', aspectRatio: '1/1'}}/>
    );
};

export {Avatar};