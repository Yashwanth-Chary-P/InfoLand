import React from 'react';
import { useSelector } from 'react-redux';
import PlotCard from './PlotCard';
import { selectAllPlots } from '../features/plots/plotsSlice';

const PlotGrid = () => {
  const plots = useSelector(selectAllPlots);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-dark-gray mb-2">Village Land Grid</h1>
        <p className="text-text-gray">Click on any plot to view detailed information</p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-govt-green rounded"></div>
          <span className="text-sm text-gray-600">Government Owned</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-private-blue rounded"></div>
          <span className="text-sm text-gray-600">Private Owned</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {plots.map((plot) => (
          <PlotCard key={plot.plotId} plot={plot} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="text-2xl font-bold text-govt-green">
            {plots.filter(plot => plot.owner === 'Govt').length}
          </div>
          <div className="text-sm text-gray-600">Government Plots</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="text-2xl font-bold text-private-blue">
            {plots.filter(plot => plot.owner === 'Private').length}
          </div>
          <div className="text-sm text-gray-600">Private Plots</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="text-2xl font-bold text-gray-700">
            {plots.length}
          </div>
          <div className="text-sm text-gray-600">Total Plots</div>
        </div>
      </div>
    </div>
  );
};

export default PlotGrid;
