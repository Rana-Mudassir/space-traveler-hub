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
      const rocket = state.rockets.find((r) => r.id === rocketId);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const states = state;
      states.rockets = action.payload;
    });
  },
});
export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
