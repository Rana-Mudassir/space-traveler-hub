import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

const Missions = (res) => res.data.map(({
  mission_id, mission_name, description,
}) => ({
  mission_id,
  mission_name,
  description,
  reserved: false,
}));

export const getMissions = createAsyncThunk('get/missions', async () => {
  const res = await axios.get(url);
  return Missions(res);
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const newId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === newId) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const State = state;
      State.missions = action.payload;
    });
  },
});
export const { reserveMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
