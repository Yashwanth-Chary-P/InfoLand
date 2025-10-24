import { createSlice } from '@reduxjs/toolkit';

// Initial dummy data for plots 127-147
const initialPlots = [
  { plotId: 127, owner: "Govt", soilType: "Loamy", area: 480, suitability: "Residential",
    recommendations: [{ type: "House", builder: "ABC Constructions" }, { type: "Park viewpoint", builder: "GreenScape" }] },
  { plotId: 128, owner: "Private", soilType: "Sandy", area: 600, suitability: "Factory",
    recommendations: [{ type: "Small Factory", builder: "LMN Builders" }] },
  { plotId: 129, owner: "Private", soilType: "Sandy", area: 450, suitability: "Residential",
    recommendations: [{ type: "Bungalow", builder: "HomeCraft" }] },
  { plotId: 130, owner: "Private", soilType: "Clay", area: 520, suitability: "Residential",
    recommendations: [{ type: "Duplex", builder: "UrbanBuilds" }] },
  { plotId: 131, owner: "Govt", soilType: "Loamy", area: 700, suitability: "Community",
    recommendations: [{ type: "Community Hall", builder: "PublicWorks" }] },
  { plotId: 132, owner: "Private", soilType: "Sandy", area: 510, suitability: "Industrial",
    recommendations: [{ type: "Warehouse", builder: "StoragePro" }] },
  { plotId: 133, owner: "Private", soilType: "Clay", area: 900, suitability: "Industrial",
    recommendations: [{ type: "Light Industry", builder: "IndoFab" }] },
  { plotId: 134, owner: "Govt", soilType: "Loamy", area: 480, suitability: "Residential",
    recommendations: [{ type: "Housing Row", builder: "GovtBuilder" }] },
  { plotId: 135, owner: "Private", soilType: "Clay", area: 650, suitability: "Residential",
    recommendations: [{ type: "Apartments", builder: "Skyline Constructions" }] },
  { plotId: 136, owner: "Private", soilType: "Sandy", area: 420, suitability: "Residential",
    recommendations: [{ type: "House", builder: "HappyHomes" }] },
  { plotId: 137, owner: "Govt", soilType: "Loamy", area: 1100, suitability: "Community",
    recommendations: [{ type: "School", builder: "EduBuilds" }] },
  { plotId: 138, owner: "Private", soilType: "Clay", area: 550, suitability: "Commercial",
    recommendations: [{ type: "Shops", builder: "MarketMakers" }] },
  { plotId: 139, owner: "Private", soilType: "Sandy", area: 760, suitability: "Industrial",
    recommendations: [{ type: "Warehouse", builder: "StockHouse" }] },
  { plotId: 140, owner: "Govt", soilType: "Loamy", area: 430, suitability: "Residential",
    recommendations: [{ type: "Official Quarters", builder: "GovtBuilder" }] },
  { plotId: 141, owner: "Private", soilType: "Sandy", area: 590, suitability: "Residential",
    recommendations: [{ type: "Villas", builder: "LuxuryBuild" }] },
  { plotId: 142, owner: "Private", soilType: "Clay", area: 510, suitability: "Residential",
    recommendations: [{ type: "Terraced Houses", builder: "Brick & Beam" }] },
  { plotId: 143, owner: "Private", soilType: "Loamy", area: 700, suitability: "Commercial",
    recommendations: [{ type: "Retail Complex", builder: "CityMall Builders" }] },
  { plotId: 144, owner: "Govt", soilType: "Loamy", area: 680, suitability: "Community",
    recommendations: [{ type: "Health Centre", builder: "Public Health Works" }] },
  { plotId: 145, owner: "Private", soilType: "Clay", area: 540, suitability: "Commercial",
    recommendations: [{ type: "Small Industry", builder: "IndoWorks" }] },
  { plotId: 146, owner: "Private", soilType: "Sandy", area: 620, suitability: "Industrial",
    recommendations: [{ type: "Workshop", builder: "FabCore" }] },
  { plotId: 147, owner: "Govt", soilType: "Loamy", area: 820, suitability: "Park / Public",
    recommendations: [{ type: "Open Park", builder: "GreenScape" }] },
];

const plotsSlice = createSlice({
  name: 'plots',
  initialState: {
    plots: initialPlots,
    selectedPlotId: null
  },
  reducers: {
    selectPlot: (state, action) => {
      state.selectedPlotId = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPlotId = null;
    }
  }
});

export const { selectPlot, clearSelection } = plotsSlice.actions;
export default plotsSlice.reducer;

