import {useRouter} from "next/router";
import {useGetMeQuery} from "@/shared/api/profile/profile";

export function useRedirectAuthToPersonalPage() {
    const router = useRouter();
    const {data: me} = useGetMeQuery({});
    if (me?.url) {
        router.push(`/${me.username}`);
    }
}