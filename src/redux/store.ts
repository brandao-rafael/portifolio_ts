import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slice';

// The Redux store
const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
