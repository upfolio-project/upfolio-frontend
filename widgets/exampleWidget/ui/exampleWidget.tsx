import {ExampleFeature} from "@/features/exampleFeature";
import {ExampleEntity} from "@/entities/exampleEntity";
import ExampleImage from "@/shared/images/exampleImages/exampleImage.png";
import {ExampleText} from "@/shared/ui/exampleText";

interface ExampleWidgetProps {
    className?: string;
}

export const ExampleWidget = ({className}: ExampleWidgetProps) => {
    return (
        <div className={className}>
            <ExampleText>I am widget with input feature and text entity</ExampleText>
            <ExampleEntity image={{src: ExampleImage, alt: "Example image"}} text="I am example text in entity"/>
            <ExampleFeature label="I am label in feature"/>
        </div>
    );
};

