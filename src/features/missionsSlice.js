import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  status: false,
};

const Missions = (res) => res.data.map(({
  mission_id, mission_name, description,
}) => ({
  mission_id,
  mission_name,
  description,
}));

export const getMissions = createAsyncThunk('get/missions', async () => {
  const res = await axios.get(url);
  return Missions(res);
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const State = state;
      State.missions = action.payload;
    });
  },
});

export default missionsSlice.reducer;
