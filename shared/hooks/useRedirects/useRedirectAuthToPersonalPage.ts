import {useRouter} from "next/router";
import {useGetMe} from "@/shared/hooks";

export function useRedirectAuthToPersonalPage() {
    const router = useRouter();
    const {me} = useGetMe();
    if (me?.url) {
        router.push(`/${me.username}`);
    }
}