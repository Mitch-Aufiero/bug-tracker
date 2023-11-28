import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../../api/api';

export const fetchusers = createAsyncThunk(
  'users/fetchusers',
  async ( thunkAPI) => {
    try{
      const response = await apiRequest('/users');
      return response;

    } catch(error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false
  },
  extraReducers: {
    [fetchusers.pending]: (state) => {
      state.loading = true;
    },
    [fetchusers.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchusers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  }
});

export default userSlice.reducer;
