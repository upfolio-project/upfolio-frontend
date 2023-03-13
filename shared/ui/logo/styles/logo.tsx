import styled from "styled-components";
import logo from "@/shared/images/logo/logoSizeS.png";
import Image, {StaticImageData} from "next/image";

interface LogoProps {
    size: 's' | 'm'
}

export const Logo = (props: LogoProps) => {
    switch (props.size) {
        case "s":
            return <LogoContainer dimension='30px' src={logo} alt=''/>;
        case "m":
            return <LogoContainer dimension='30px' src={logo} alt=''/>;
        default:
            return null;
    }
};

interface LogoContainerProps {
    dimension: string
    src: StaticImageData | string
    alt: string
}

const LogoContainer = ({dimension, src, alt}: LogoContainerProps) => {
    return (
        <ImgWrapper dimension={dimension}>
            <ImgStyled src={src} alt={alt}/>
        </ImgWrapper>
    );
};

const ImgStyled = styled(Image)`
  aspect-ratio: 1/1;
  width: 100%;
  height: auto;
`;

interface ImgWrapperProps {
    dimension: string
}

const ImgWrapper = styled('div')<ImgWrapperProps>`
  width: ${props => props.dimension};
  height: ${props => props.dimension};
`;