import {RegisterFinishWidget} from "@/widgets/registerWidget";
import {BaseLayout} from "@/layouts/baseLayout";
import {useRedirectAuthToPersonalPage} from "@/shared/hooks";

export default function Register() {
    useRedirectAuthToPersonalPage();

    return (
        <BaseLayout>
            <RegisterFinishWidget/>
        </BaseLayout>
    );
}