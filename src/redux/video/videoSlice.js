import { createSlice } from '@reduxjs/toolkit';
import { uploadUserVideo } from './videoAPI';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        loading: false,
        error: null
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadUserVideo.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadUserVideo.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(uploadUserVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const {
    setError
} = videoSlice.actions;

export default videoSlice.reducer;