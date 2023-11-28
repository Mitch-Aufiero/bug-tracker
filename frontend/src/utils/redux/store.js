import { configureStore } from '@reduxjs/toolkit';
import bugsSlice from '../../features/bugs/slices/bugSlice';
import ProjectSlice from '../../features/projects/slices/ProjectSlice';
import UserSlice from '../../features/users/slices/UserSlice';



export const store = configureStore({
  reducer: {
    bugs: bugsSlice,
    projects: ProjectSlice,
    users: UserSlice,
  },
});
 