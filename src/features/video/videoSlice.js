import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        uploadProgress: 0,
        video: null,
        faces: [],
        models: [],
        isProcessing: false,
        error: null
    },
    reducers: {
        uploadProgress: (state, action) => {
            state.uploadProgress = action.payload;
        },
        videoUploaded: (state, action) => {
            state.video = action.payload;
        },
        facesDetected: (state, action) => {
            state.faces = action.payload;
        },
        setProcessing: (state, action) => {
            state.isProcessing = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    uploadProgress,
    videoUploaded,
    facesDetected,
    modelsReceived,
    setProcessing,
    setError
} = videoSlice.actions;

export default videoSlice.reducer;