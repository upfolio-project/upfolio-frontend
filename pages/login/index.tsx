import {LoginWidget} from "@/widgets/loginWidget";
import {BaseLayout} from "@/layouts/baseLayout";
import {useRedirectAuthToPersonalPage} from "@/shared/hooks";

export default function Login() {
    useRedirectAuthToPersonalPage();

    return (
        <BaseLayout>
            <LoginWidget/>
        </BaseLayout>
    );
}