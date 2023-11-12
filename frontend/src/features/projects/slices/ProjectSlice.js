import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../../api/api';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async ( thunkAPI) => {
    try{
      const response = await apiRequest('/projects');
      console.log(response);
      return response;

    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const ProjectSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false
  },
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.loading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  }
});

export default ProjectSlice.reducer;
