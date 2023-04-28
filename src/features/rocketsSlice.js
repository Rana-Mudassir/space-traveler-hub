import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v4/rockets';

const formattedRockets = (response) => response.data.map(({
  id, name, description, flickr_images,
}) => ({
  id,
  name,
  description,
  flickr_images,
  reserved: false,
}));
export const getRockets = createAsyncThunk('get/rockets', async () => {
  const response = await axios.get(baseURL);
  return formattedRockets(response);
});

const initialState = {
  rockets: [],

};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const states = state;
      states.rockets = action.payload;
    });
  },
});
export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
