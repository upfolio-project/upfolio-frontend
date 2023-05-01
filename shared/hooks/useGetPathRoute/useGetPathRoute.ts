import {useRouter} from "next/router";

export function useGetPathRoute(depth = 1) {
    const router = useRouter();
    return router.asPath.split("/")[depth]?.split("?")[0]?.split("#")[0];
}