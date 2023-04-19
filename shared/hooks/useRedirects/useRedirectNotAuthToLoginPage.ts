import {useRouter} from "next/router";
import {useGetMe} from "@/shared/hooks";

export function useRedirectNotAuthToLoginPage() {
    const router = useRouter();
    const {me, loading} = useGetMe();
    if (!loading && !me) {
        router.push(`/login`);
    }
}