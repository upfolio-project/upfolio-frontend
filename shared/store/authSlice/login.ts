import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Login {
    error: string
    auth: boolean
}

const initialState: Login = {
    error: '',
    auth: false
};

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {
        setAuth(state: Login, action: PayloadAction<boolean>) {
            state.auth = action.payload;
        },
        setError(state: Login, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }
});

export default loginSlice.reducer;