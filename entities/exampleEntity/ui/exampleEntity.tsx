import {StaticImageData} from "next/image";
import {ExampleImage} from "@/shared/ui/exampleImage";
import {ExampleText} from "@/shared/ui/exampleText";

interface ImageData {
    src: StaticImageData | string;
    alt: string;
}

interface ExampleEntityProps {
    image: ImageData;
    text: string;
    className?: string;
}

export function ExampleEntity({image, text, className}: ExampleEntityProps) {
    return (
        <div className={className}>
            <ExampleImage src={image.src} alt={image.alt}/>
            <ExampleText>{text}</ExampleText>
        </div>
    );
}


