import {useGetMeQuery} from "@/shared/api/profile/profile";
import {useAppSelector} from "@/shared/hooks";


export function useGetMe(force = false) {
    const user = useAppSelector(state => state.user);
    const {data, isLoading} =
        useGetMeQuery({}, {skip: user.userState !== "notFetch" && !force});

    if (user.userState === "login") {
        return {me: user.me, loading: false};
    }
    return {me: data, loading: isLoading};
}