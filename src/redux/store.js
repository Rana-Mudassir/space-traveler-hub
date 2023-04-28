import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/rocketsSlice';
import missionsReducer from '../features/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketsReducer,
    mission: missionsReducer,
  },
});
export default store;
