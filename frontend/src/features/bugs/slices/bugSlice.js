import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../../api/api';

export const fetchBugs = createAsyncThunk(
  'bugs/fetchBugs',
  async (thunkAPI) => {
    try{
      const response = await apiRequest('/bugs');
      return response;

    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


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
