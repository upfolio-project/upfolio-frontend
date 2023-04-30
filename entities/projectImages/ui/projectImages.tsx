import styled from "styled-components";
import {Box} from "@mui/material";
import {borders, colors, sizes} from "@upfolio-project/upfolio-ui";
import React from "react";
import Image from "next/image";

interface ProjectImagesProps {
    images: string[];
}

const ProjectImagesContainer = styled(Box)`

`;

const ImageContainer = styled(Box)`
  border-radius: ${borders.radius10};
  background-color: ${colors.colorSecondary05};
  object-fit: contain;
  & img {
    border-radius: ${borders.radius10};
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  
`;

const ProjectImages = ({images}: ProjectImagesProps) => {
    const imageSizes = {
        "1": {areas: '"E"', sizes: [["944px", "358px"]]},
        "2": {areas: '"E F"', sizes: [["462px", "358px"], ["462px", "358px"]]},
        "3": {areas: '"E E" "F G"', sizes: [["482px", "358px"], ["230px", "170px"], ["230px", "170px"]]}
    };

    const imageCount = images.length.toString() as ("1" | "2" | "3");

    return (
        <ProjectImagesContainer
            display="grid"
            width="100%"
            gridTemplateAreas={imageSizes[imageCount].areas}
            gap={sizes.s}
        >
            {imageSizes[imageCount].sizes.map((size, index) => (
                <ImageContainer
                    key={index}
                    gridArea={"EFG"[index]}
                    width={size[0]}
                    height={size[1]}
                >
                    <Image alt="" src={images[index]} width={500} height={500}/>
                </ImageContainer>
            ))}
        </ProjectImagesContainer>
    );
};


export {ProjectImages};