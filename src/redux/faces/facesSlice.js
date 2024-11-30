import { createSlice } from "@reduxjs/toolkit";
import { fetchFaceModel, fetchFaces } from './facesAPI';

const facesSlice = createSlice({
    name: 'faces',
    initialState: {
        // list of faces
        recognizedFaces: [],
        selectedFace: null,
        // model cache
        faceModelsCache: {},
        // loading state for each model
        loadingStates: {},
        // status of the faces fetch
        status: 'idle',
        // error msg
        error: null,
    },
    reducers: {
        setRecognizedFaces: (state, action) => {
            state.recognizedFaces = action.payload;
        },
        setSelectedFace: (state, action) => {
            state.selectedFace = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // handle 3d model loading
            .addCase(fetchFaceModel.pending, (state) => {
                const faceId = action.meta.arg;
                state.loadingStates[faceId] = 'loading';
            })
            .addCase(fetchFaceModel.fulfilled, (state, action) => {
                const { faceId, model } = action.payload;
                state.faceModelsCache[faceId] = model;
                state.loadingStates[faceId] = 'succeeded';
            })
            .addCase(fetchFaceModel.rejected, (state) => {
                const faceId = action.meta.arg;
                state.loadingStates[faceId] = 'error';
            })
            // handle face list loading
            .addCase(fetchFaces.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFaces.fulfilled, (state) => {
                state.recognizedFaces = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchFaces.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
    }
});

export const {
    setRecognizedFaces,
    setSelectedFace
} = facesSlice.actions;

export default facesSlice.reducer;