import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Register() {
    useEffect(() => {
        router.replace("/register/enterPhone");
    });
    const router = useRouter();
    return <></>;
}