import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserProjects } from '../auth/authApi';
import { setCurrentProject } from '../auth/authSlice';
import { setLoading } from '../loadingSlice';

const API_URL = 'http://localhost:5000'; // Adjust based on your backend URL

export const uploadVideo = async ({ videoFile }) => {
    const formData = new FormData();
    formData.append('video', videoFile);

    const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
};

export const uploadUserVideo = createAsyncThunk(
    'projects/uploadUserVideo',
    async ({ videoFile }, { rejectWithValue, dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await uploadVideo(videoFile);
            const { projectId, userId } = response.data;

            dispatch(setCurrentProject(projectId));
            dispatch(getUserProjects(userId));

            dispatch(setLoading(false));

            return response.data;
        } catch (error) {
            dispatch(setLoading(false));
            return rejectWithValue(error.response.data?.message || 'Error uploading video');
        }
    }
);