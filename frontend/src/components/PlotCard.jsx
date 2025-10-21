import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPlot } from '../features/plots/plotsSlice';

const PlotCard = ({ plot }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedPlot(plot));
    navigate(`/plot/${plot.plotId}`);
  };

  const getOwnerColor = (owner) => {
    return owner === 'Govt' ? 'bg-govt-green' : 'bg-private-blue';
  };

  const getOwnerTextColor = (owner) => {
    return owner === 'Govt' ? 'text-govt-green' : 'text-private-blue';
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative p-4 rounded-lg cursor-pointer transition-all duration-300 
        hover:shadow-lg hover:scale-105 hover:z-10
        ${getOwnerColor(plot.owner)}
        min-h-[100px] sm:min-h-[120px] flex flex-col justify-between
        border border-gray-200 hover:border-gray-300
      `}
    >
      {/* Plot ID */}
      <div className="absolute top-2 left-2 bg-white bg-opacity-90 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-gray-700">
        {plot.plotId}
      </div>

      {/* Owner Badge */}
      <div className="absolute top-2 right-2">
        <span className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${plot.owner === 'Govt' ? 'bg-white bg-opacity-90 text-govt-green' : 'bg-white bg-opacity-90 text-private-blue'}
        `}>
          {plot.owner}
        </span>
      </div>

      {/* Plot Details */}
      <div className="mt-6 sm:mt-8 text-white">
        <div className="text-xs sm:text-sm opacity-90">
          <div className="font-medium">{plot.area} sq ft</div>
          <div className="text-xs mt-1">{plot.soilType} soil</div>
        </div>
        
        <div className="mt-2">
          <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
            {plot.suitability}
          </span>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
    </div>
  );
};

export default PlotCard;
