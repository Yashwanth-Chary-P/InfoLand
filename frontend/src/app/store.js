import { configureStore } from '@reduxjs/toolkit';
import plotsReducer from '../features/plots/plotsSlice';

export const store = configureStore({
  reducer: {
    plots: plotsReducer,
  },
});

export default store;
