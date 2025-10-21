import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPlots, setSelectedPlot } from '../features/plots/plotsSlice';
import PlotDetails from './PlotDetails';

const PlotMap = () => {
  const plots = useSelector(selectAllPlots);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handlePlotClick = (plot) => {
    dispatch(setSelectedPlot(plot));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getOwnerColor = (owner) => {
    return owner === 'Govt' ? 'bg-govt-green' : 'bg-private-blue';
  };

  const getOwnerBorderColor = (owner) => {
    return owner === 'Govt' ? 'border-govt-green' : 'border-private-blue';
  };

  return (
    <div className="w-full h-screen bg-soft-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-dark-gray">Village Land Map</h1>
              <p className="text-text-gray text-sm md:text-base">Interactive plot map - Click on any plot to view details</p>
            </div>
            
            {/* Legend */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-govt-green rounded"></div>
                <span className="text-sm text-gray-600">Government</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-private-blue rounded"></div>
                <span className="text-sm text-gray-600">Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative overflow-auto h-full">
        <div 
          className="relative bg-white border-2 border-gray-200 m-2 md:m-4 shadow-lg"
          style={{ 
            width: '1000px', 
            height: '800px',
            minWidth: '1000px',
            minHeight: '800px'
          }}
        >
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            {/* Vertical lines */}
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={`v-${i}`}
                className="absolute bg-gray-300"
                style={{
                  left: `${i * 10}%`,
                  top: 0,
                  width: '1px',
                  height: '100%'
                }}
              />
            ))}
            {/* Horizontal lines */}
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={`h-${i}`}
                className="absolute bg-gray-300"
                style={{
                  top: `${i * 12.5}%`,
                  left: 0,
                  height: '1px',
                  width: '100%'
                }}
              />
            ))}
          </div>

          {/* Plots */}
          {plots.map((plot) => (
            <div
              key={plot.plotId}
              onClick={() => handlePlotClick(plot)}
              className={`
                absolute cursor-pointer transition-all duration-300
                hover:shadow-xl hover:scale-105 hover:z-20
                ${getOwnerColor(plot.owner)}
                border-2 ${getOwnerBorderColor(plot.owner)}
                rounded-lg
                flex flex-col justify-center items-center
                text-white font-medium
                hover:bg-opacity-90
                group
              `}
              style={{
                left: `${plot.x}px`,
                top: `${plot.y}px`,
                width: `${plot.width}px`,
                height: `${plot.height}px`,
              }}
            >
              {/* Plot ID */}
              <div className="text-lg font-bold mb-1 group-hover:text-xl transition-all">
                #{plot.plotId}
              </div>
              
              {/* Area */}
              <div className="text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                {plot.area} sq ft
              </div>
              
              {/* Soil Type */}
              <div className="text-xs opacity-75 mt-1">
                {plot.soilType}
              </div>
              
              {/* Suitability Badge */}
              <div className="absolute -top-2 -right-2">
                <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  {plot.suitability}
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
            </div>
          ))}

          {/* Map Info */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600">
              <div className="font-semibold mb-1">Map Information</div>
              <div>Total Plots: {plots.length}</div>
              <div>Govt Plots: {plots.filter(p => p.owner === 'Govt').length}</div>
              <div>Private Plots: {plots.filter(p => p.owner === 'Private').length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-4 md:px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold text-dark-gray">Plot Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-4 md:p-6">
              <PlotDetails />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlotMap;
