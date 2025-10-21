import { createSlice } from '@reduxjs/toolkit';
import { initialPlotsData } from '../../data/plotsData';

const initialState = {
  plots: initialPlotsData,
  selectedPlot: null,
  isLoading: false,
  error: null
};

const plotsSlice = createSlice({
  name: 'plots',
  initialState,
  reducers: {
    setSelectedPlot: (state, action) => {
      state.selectedPlot = action.payload;
    },
    clearSelectedPlot: (state) => {
      state.selectedPlot = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setSelectedPlot, clearSelectedPlot, setLoading, setError } = plotsSlice.actions;

// Selectors
export const selectAllPlots = (state) => state.plots.plots;
export const selectSelectedPlot = (state) => state.plots.selectedPlot;
export const selectPlotById = (state, plotId) => 
  state.plots.plots.find(plot => plot.plotId === plotId);
export const selectPlotsByOwner = (state, owner) => 
  state.plots.plots.filter(plot => plot.owner === owner);
export const selectPlotsBySuitability = (state, suitability) => 
  state.plots.plots.filter(plot => plot.suitability === suitability);

export default plotsSlice.reducer;
