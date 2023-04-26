import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/rocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketsReducer,
  },
});
export default store;
