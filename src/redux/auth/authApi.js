import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from '../loadingSlice';

// Sign In thunk
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/signin', { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Sign-in failed');
    }
  }
);

// Sign Up thunk
export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/signup', { name, email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Sign-up failed');
    }
  }
);

// Google Login Thunk
export const googleLoginUser = createAsyncThunk('auth/googleLoginUser', async (token, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true));
  setTimeout(() => { }, 3000);
  try {
    const response = await axios.post('http://localhost:5000/login/google', { token });
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const getUserProjects = createAsyncThunk('auth/getUserProjects', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:5000/projects/${userId}`);
    return response.data
  } catch (error) {
    rejectWithValue(error.response?.data?.message || "Error fetching projects");
  }
});
