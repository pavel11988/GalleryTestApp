import {configureStore} from '@reduxjs/toolkit';
import {galleryReducer} from './gallery';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});

export default store;
