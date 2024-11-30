import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
        msg: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setLoadingMessage: (state, action) => {
            state.msg = action.payload;
        },
    },
});

export const { setLoading, setLoadingMessage } = loadingSlice.actions;
export default loadingSlice.reducer;
