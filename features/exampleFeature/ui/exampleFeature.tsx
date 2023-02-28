import {ExampleText} from "@/shared/ui/exampleText";
import {ExampleInput} from "@/shared/ui/ExampleInput";

interface ExampleFeatureProps {
    label: string;
    className?: string;
}

export const ExampleFeature = ({label, className}: ExampleFeatureProps) => {
    return (
        <label className={className}>
            <ExampleText>{label}</ExampleText>
            <ExampleInput placeholder="I am placeholder in input (ui) in feature"/>
        </label>
    );
};
