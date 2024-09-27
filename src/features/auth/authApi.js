import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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