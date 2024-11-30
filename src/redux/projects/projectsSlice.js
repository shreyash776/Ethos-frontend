
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        createProject: (state, action) => {
            const newProject = {
                id: crypto.randomUUID(),
                ...action.payload,
            };
            state.list.push(newProject);
        },
        deleteProject: (state, action) => {
            state.list = state.list.filter((project) => project.id !== action.payload);
        },
    },
});

export const { createProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;