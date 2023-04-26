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
}));
export const getRockets = createAsyncThunk('get/rockets', async () => {
  const response = await axios.get(baseURL);
  return formattedRockets(response);
});

const initialState = {
  rockets: [],
  reserved: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const states = state;
      states.rockets = action.payload;
    });
  },
});

export default rocketsSlice.reducer;
