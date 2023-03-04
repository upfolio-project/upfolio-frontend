import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Register {
    step: 0 | 1 | 2;
    error: string
}

const initialState: Register = {
    step: 0,
    error: ''
};

export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: initialState,
    reducers: {
        setStep(state: Register, action: PayloadAction<0 | 1 | 2>) {
            state.step = action.payload;
        },
        setError(state: Register, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
});

export default registerSlice.reducer;