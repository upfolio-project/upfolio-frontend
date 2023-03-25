import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/shared/store";
import {useRedirectAuthToPersonalPage} from "./useRedirectAuthToPersonalPage/useRedirectAuthToPersonalPage";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useRedirectAuthToPersonalPage};