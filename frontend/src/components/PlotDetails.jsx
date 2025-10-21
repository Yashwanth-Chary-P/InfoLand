import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedPlot } from '../features/plots/plotsSlice';

const PlotDetails = () => {
  const selectedPlot = useSelector(selectSelectedPlot);

  if (!selectedPlot) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">No plot selected</div>
      </div>
    );
  }

  const getOwnerColor = (owner) => {
    return owner === 'Govt' ? 'text-govt-green' : 'text-private-blue';
  };

  const getOwnerBgColor = (owner) => {
    return owner === 'Govt' ? 'bg-govt-green bg-opacity-10' : 'bg-private-blue bg-opacity-10';
  };

  const getSuitabilityColor = (suitability) => {
    switch (suitability) {
      case 'Residential':
        return 'bg-green-100 text-green-800';
      case 'Industrial':
        return 'bg-blue-100 text-blue-800';
      case 'Factory':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSoilTypeColor = (soilType) => {
    switch (soilType) {
      case 'Clay':
        return 'bg-red-100 text-red-800';
      case 'Sandy':
        return 'bg-yellow-100 text-yellow-800';
      case 'Loamy':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-dark-gray">Plot #{selectedPlot.plotId}</h1>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${getOwnerBgColor(selectedPlot.owner)} ${getOwnerColor(selectedPlot.owner)}`}>
            {selectedPlot.owner} Owned
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-dark-gray mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Area</span>
                <span className="font-semibold text-dark-gray">{selectedPlot.area.toLocaleString()} sq ft</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Soil Type</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSoilTypeColor(selectedPlot.soilType)}`}>
                  {selectedPlot.soilType}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Suitability</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSuitabilityColor(selectedPlot.suitability)}`}>
                  {selectedPlot.suitability}
                </span>
              </div>
            </div>
          </div>

          {/* Soil Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Soil Analysis</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Type</span>
                <span className="font-medium">{selectedPlot.soilType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drainage</span>
                <span className="font-medium">
                  {selectedPlot.soilType === 'Sandy' ? 'Excellent' : 
                   selectedPlot.soilType === 'Loamy' ? 'Good' : 'Moderate'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Foundation Suitability</span>
                <span className="font-medium">
                  {selectedPlot.soilType === 'Clay' ? 'Requires Deep Foundation' : 
                   selectedPlot.soilType === 'Sandy' ? 'Standard Foundation' : 'Excellent Foundation'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-dark-gray mb-4">Recommended Constructions</h2>
            <div className="space-y-4">
              {selectedPlot.recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-dark-gray">{rec.type}</h3>
                    <span className="text-xs text-gray-500">#{index + 1}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Builder:</span> {rec.builder}
                  </div>
                  <div className="text-xs text-gray-500">
                    Estimated Cost: ${Math.floor(Math.random() * 500000 + 100000).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Additional Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Zoning</span>
                <span className="font-medium">{selectedPlot.suitability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Development Potential</span>
                <span className="font-medium">
                  {selectedPlot.area > 1200 ? 'High' : selectedPlot.area > 800 ? 'Medium' : 'Standard'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Infrastructure</span>
                <span className="font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-govt-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
          Contact Builder
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default PlotDetails;
