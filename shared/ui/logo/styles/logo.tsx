import styled from "styled-components";
import logoWithoutTextSizeS from "@/shared/images/logo/logoSizeS.png";
import logoWithTextSizeS from "@/shared/elements/logo/logoWithTextSizeS.svg";
import Image, {StaticImageData} from "next/image";

interface LogoProps {
    size: 's' | 'm'
    withText?: boolean
}

function getSrc(withText: boolean | undefined, logoWithText: StaticImageData | string, logoWithoutText: StaticImageData | string) {
    return withText ? logoWithText : logoWithoutText;
}

export const Logo = (props: LogoProps) => {
    switch (props.size) {
        case "s":
            return <LogoContainer width='125px' height='30px'
                                  src={getSrc(props.withText, logoWithTextSizeS, logoWithoutTextSizeS)} alt=''/>;
        case "m":
            return <LogoContainer width='125px' height='30px'
                                  src={getSrc(props.withText, logoWithTextSizeS, logoWithoutTextSizeS)} alt=''/>;
        default:
            return null;
    }
};

interface LogoContainerProps {
    width: string
    height: string
    src: StaticImageData | string
    alt: string
}

const LogoContainer = ({width, height, src, alt}: LogoContainerProps) => {
    return (
        <ImgWrapper width={width} height={height}>
            <ImgStyled src={src} alt={alt}/>
        </ImgWrapper>
    );
};

const ImgStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

interface ImgWrapperProps {
    width: string
    height: string
}

const ImgWrapper = styled('div')<ImgWrapperProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;