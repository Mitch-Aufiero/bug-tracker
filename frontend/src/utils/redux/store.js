import { configureStore } from '@reduxjs/toolkit';
import bugsSlice from '../../features/bugs/slices/bugSlice';
import ProjectSlice from '../../features/projects/slices/ProjectSlice';



export const store = configureStore({
  reducer: {
    bugs: bugsSlice,
    projects: ProjectSlice,
  },
});
 