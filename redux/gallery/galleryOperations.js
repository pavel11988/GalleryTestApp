import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'https://api.unsplash.com';
const CLIENT_ID = 'EUoLTkboMwF_d15KpmyLSxG8u2eYwJXo7BpXPOrc11U';

const getRandomImages = createAsyncThunk(
  'gallery/getRandomImages',
  async () => {
    try {
      const {data} = await axios.get(
        `${BASE_URL}/photos?page=1&per_page=30&client_id=${CLIENT_ID}`,
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const getImagesByRequest = createAsyncThunk(
  'gallery/getImagesByRequest',
  async request => {
    console.log('request in thunk:', request);
    try {
      const {data} = await axios.get(
        `${BASE_URL}/search/photos/?page=1&per_page=30&query=${request}&client_id=${CLIENT_ID}`,
      );
      return data;
    } catch (error) {}
  },
);

const galleryOperations = {
  getRandomImages,
  getImagesByRequest,
};

export default galleryOperations;
