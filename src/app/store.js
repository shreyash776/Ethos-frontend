import { configureStore } from '@reduxjs/toolkit';
// import faceReducer from '../features/faceDetection/faceSlice';
import authReducer from '../features/auth/authSlice';
import videoReducer from '../features/video/videoSlice';

export const store = configureStore({
  reducer: {
    // faceDetection: faceReducer,
    auth: authReducer,
    video: videoReducer,
  },
});