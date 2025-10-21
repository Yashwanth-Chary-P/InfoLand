# InfoLand - Land & Construction Recommendation Platform

A Phase 1 prototype frontend for a land and construction recommendation platform built with React, Redux Toolkit, and Tailwind CSS.

## Features

- **Interactive Land Grid**: 5x6 grid (30 plots) with color-coded ownership
- **Plot Details**: Comprehensive information about each plot including soil analysis and construction recommendations
- **Responsive Design**: Optimized for desktop and tablet viewing
- **Modern UI**: Clean, professional interface with smooth animations
- **Redux State Management**: Centralized state management for plot data
- **React Router**: Multi-page navigation

## Tech Stack

- **React 18** with functional components and hooks
- **Redux Toolkit** for state management
- **React Router DOM** for navigation
- **Tailwind CSS** for styling
- **ES6** import/export syntax

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── PlotCard.jsx
│   │   ├── PlotGrid.jsx
│   │   └── PlotDetails.jsx
│   ├── features/plots/
│   │   └── plotsSlice.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PlotDetailsPage.jsx
│   │   └── About.jsx
│   ├── app/
│   │   └── store.js
│   ├── data/
│   │   └── plotsData.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Land Grid
- View the 5x6 grid of land plots
- Green plots = Government owned
- Blue plots = Private owned
- Click any plot to view detailed information

### Plot Details
- Comprehensive soil analysis
- Construction suitability assessment
- Builder recommendations with contact information
- Estimated project costs

### Navigation
- Use the navigation bar to switch between pages
- "Land Grid" takes you to the main plot view
- "About" provides platform information

## Data Structure

Each plot contains:
```javascript
{
  plotId: Number, // 1-30
  owner: "Govt" | "Private",
  soilType: "Clay" | "Sandy" | "Loamy",
  area: Number, // in square feet
  suitability: "Residential" | "Industrial" | "Factory",
  recommendations: [
    { type: String, builder: String }
  ]
}
```

## Responsive Design

- **Mobile**: 2 columns
- **Small tablets**: 3 columns
- **Medium tablets**: 4 columns
- **Large tablets**: 5 columns
- **Desktop**: 6 columns

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Government plots: `govt-green` (#10B981)
- Private plots: `private-blue` (#3B82F6)
- Background: `soft-gray` (#F8FAFC)

### Adding New Plots
Edit `src/data/plotsData.js` to add or modify plot data.

### Styling
All styles use Tailwind CSS classes. Custom styles can be added to `src/index.css`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Future Enhancements

- Backend integration
- User authentication
- Real-time data updates
- Advanced filtering and search
- Interactive maps
- Project management tools
- Builder profiles and ratings
