import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
// import faceReducer from '../features/faceDetection/faceSlice';
=======
>>>>>>> b5acec52df9c5214cb6f2191585c1d885a53a8ad
import authReducer from '../features/auth/authSlice';
import videoReducer from '../features/video/videoSlice';

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    // faceDetection: faceReducer,
=======
>>>>>>> b5acec52df9c5214cb6f2191585c1d885a53a8ad
    auth: authReducer,
    video: videoReducer,
  },
});