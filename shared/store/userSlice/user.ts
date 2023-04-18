import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetMeSuccessResponse} from "@/shared/api/entities";
import { HYDRATE } from "next-redux-wrapper";

interface User {
    userState: "notLogin" | "login" | "notFetch"
    me?: GetMeSuccessResponse
}



const initialState: User = {
    userState: "notFetch"
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        setUser(state: User, action: PayloadAction<User>) {
            state.me = action.payload.me;
            state.userState = action.payload.userState;
        },
        deleteUser(state: User) {
            state.me = undefined;
        }
    },
});

export default userSlice.reducer;
