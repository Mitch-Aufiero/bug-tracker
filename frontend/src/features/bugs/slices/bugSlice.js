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

export const fetchBugById = createAsyncThunk(
  'bugs/fetchBugById',
  async (bugId, thunkAPI) => {
    try {
      const response = await apiRequest(`/bugs/${bugId}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



export const selectBugsByProjectId = (projectId) => {
  return (state) => {
    return state.bugs.items.filter(bug => bug.project_id === projectId);
  };
};

export const selectCriticalBugs = (bugs) => {
  const criticalBugs = bugs.filter(bug => bug.severity === 'Critical');
  return criticalBugs;
};

export const selectBugsBySeverity = (bugs) => {
  const severityMap = [{name:'Critical', count:0},{name:'High', count:0},{name:'Medium', count:0},{name:'Low', count:0}];

  bugs.forEach(bug => { 
    const severityItem = severityMap.find(item => item.name === bug.severity);

    if (severityItem) {
      severityItem.count++;
    } else {
      severityMap.push({ name: bug.severity, count: 1 }); //just incase new severities are introduced
    }

  });
  return severityMap;
};

export const selectBugsByAssignee = (bugs) => {
  const assigneeMap = [];

  bugs.forEach(bug => { 
    const assigneeItem = assigneeMap.find(item => item.name === bug.assigned_to);
    
    if (assigneeItem) {
      assigneeItem.count++;
    } else {
      assigneeMap.push({ name: bug.assigned_to, count: 1 });
    }

  });

  return assigneeMap;
};



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
