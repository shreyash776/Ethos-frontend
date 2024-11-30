import { createSlice } from '@reduxjs/toolkit';
import { getUserProjects, googleLoginUser, signIn, signUp } from './authApi';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    currentProject: null,
    userProjects: [],
  },
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.currentProject = null;
      state.userProjects = [];
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    clearCurentProject: (state) => {
      state.currentProject = null;
    },
    setUserProjects: (state, action) => {
      state.userProjects = action.payload;
    },
    removeUserProject: (state, action) => {
      state.userProjects = state.userProjects.filter(project => project.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Google login user
    builder
      .addCase(googleLoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(googleLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Google login failed';
      });

    builder
      .addCase(getUserProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.userProjects = action.payload;
      })
      .addCase(getUserProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { signOut, setCurrentProject } = authSlice.actions;
export default authSlice.reducer;