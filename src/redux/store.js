import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import faceReducer from './faces/facesSlice';
import loadingReducer from './loadingSlice';
import projectsReducer from './projects/projectsSlice';
import videoSlice from './video/videoSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        faces: faceReducer,
        loading: loadingReducer,
        video: videoSlice,
        projects: projectsReducer
    },
});