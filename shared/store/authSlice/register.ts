import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Register {
    error: string
}

const initialState: Register = {
    error: ''
};

export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: initialState,
    reducers: {
        setError(state: Register, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
});

export default registerSlice.reducer;