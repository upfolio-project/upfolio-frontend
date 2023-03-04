import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commonApi} from "@/shared/api";
import login from "@/shared/store/authSlice/login";

const rootReducer = combineReducers({
    login,
    [commonApi.reducerPath]: commonApi.reducer,
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