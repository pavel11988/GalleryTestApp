import {createSlice} from '@reduxjs/toolkit';
import galleryOperations from './galleryOperations';

const initialState = {
  images: [],
  status: null,
  error: null,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  extraReducers: {
    // get random
    [galleryOperations.getRandomImages.pending]: (state, action) => {
      state.status = 'pending';
      state.error = null;
    },
    [galleryOperations.getRandomImages.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.error = null;
      state.images = action.payload;
    },
    [galleryOperations.getRandomImages.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = true;
    },

    // get by request
    [galleryOperations.getImagesByRequest.pending]: (state, action) => {
      state.status = 'pending';
      state.error = null;
    },
    [galleryOperations.getImagesByRequest.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.error = null;
      state.images = action.payload.results;
    },
    [galleryOperations.getImagesByRequest.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = true;
    },
  },
});

export default gallerySlice.reducer;
