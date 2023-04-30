import styled from "styled-components";
import logoWithoutTextSizeS from "@/shared/elements/logo/logoSizeS.svg";
import logoWithTextSizeS from "@/shared/elements/logo/logoWithTextSizeS.svg";
import Image, {ImageProps, StaticImageData} from "next/image";

interface LogoProps {
    size: 's' | 'm';
    withText?: boolean;
}

function getSrc(
    withText: boolean | undefined,
    logoWithText: StaticImageData | string,
    logoWithoutText: StaticImageData | string
) {
    return withText ? logoWithText : logoWithoutText;
}

export const Logo = (props: LogoProps) => {
    switch (props.size) {
        case "s":
            return <LogoContainer
                width="104px" height="24px"
                src={getSrc(props.withText,
                    logoWithTextSizeS,
                    logoWithoutTextSizeS)}
                alt=""/>;
        case "m":
            return <LogoContainer
                width="125px"
                height="30px"
                src={getSrc(props.withText,
                    logoWithTextSizeS,
                    logoWithoutTextSizeS)}
                alt=""/>;
        default:
            return null;
    }
};

interface LogoContainerProps {
    width: string;
    height: string;
    src: StaticImageData | string;
    alt: string;
}

const LogoContainer = ({width, height, src, alt}: LogoContainerProps) => {
    return (
        <ImgWrapper width={width} height={height}>
            <ImgStyled src={src} alt={alt} w={width} h={height}/>
        </ImgWrapper>
    );
};

interface ImgStyledProps extends ImageProps {
    w: string;
    h: string;
}

const ImgStyled = styled(Image)<ImgStyledProps>`
  width: ${props => props.w};
  height: ${props => props.h};
`;

interface ImgWrapperProps {
    width: string;
    height: string;
}

const ImgWrapper = styled('div')<ImgWrapperProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;