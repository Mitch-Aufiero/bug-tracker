import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../../api/api';

export const fetchBugs = createAsyncThunk(
  'bugs/fetchBugs',
  async (queryString = '', thunkAPI) => {
    try{
      const endpoint = queryString ? `/bugs?query=${queryString}` : '/bugs';
      const response = await apiRequest(endpoint);
      return response;

    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const selectCriticalBugs = state => state.bugs.items.filter(bug => bug.severity === 'Critical');

const bugsSlice = createSlice({
  name: 'bugs',
  initialState: {
    items: [],
    loading: false
  },
  reducers: {
    addBug: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: {
    [fetchBugs.pending]: (state) => {
      state.loading = true;
    },
    [fetchBugs.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchBugs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  }
});

export const { addBug } = bugsSlice.actions;
export default bugsSlice.reducer;
