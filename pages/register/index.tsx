import {useRouter} from "next/router";
import {useEffect} from "react";
import {useRedirectAuthToPersonalPage} from "@/shared/hooks";

export default function Register() {
    useRedirectAuthToPersonalPage();

    useEffect(() => {
        router.replace("/register/enterPhone");
    });
    const router = useRouter();
    return <></>;
}