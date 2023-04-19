import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/shared/store";
import {useRedirectAuthToPersonalPage} from "@/shared/hooks/useRedirects/useRedirectAuthToPersonalPage";
import {useRedirectNotAuthToLoginPage} from "@/shared/hooks/useRedirects/useRedirectNotAuthToLoginPage";
import {useGetMe} from "@/shared/hooks/useGetMe/useGetMe";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useRedirectAuthToPersonalPage, useRedirectNotAuthToLoginPage, useGetMe};