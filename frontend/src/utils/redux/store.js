import { configureStore } from '@reduxjs/toolkit';
import bugsSlice from '../../features/bugs/slices/bugSlice';



export const store = configureStore({
  reducer: {
    bugs: bugsSlice,
  },
});
 