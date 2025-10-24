import { configureStore } from '@reduxjs/toolkit';
import plotsReducer from '../features/plots/plotsSlice.js';

export const store = configureStore({
  reducer: {
    plots: plotsReducer,
  },
});

