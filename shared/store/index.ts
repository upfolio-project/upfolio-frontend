import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commonApi} from "@/shared/api";
import login from "@/shared/store/authSlice/login";
import register from "@/shared/store/authSlice/register";
import user from "@/shared/store/userSlice/user";
import {createWrapper, HYDRATE} from "next-redux-wrapper";

const rootReducer = combineReducers({
    login,
    register,
    user,
    [commonApi.reducerPath]: commonApi.reducer,
    [HYDRATE]: (state: any, action: any) => {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state?.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    },
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(commonApi.middleware),
    });
};
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(setupStore);