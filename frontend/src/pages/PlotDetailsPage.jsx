import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlotById, setSelectedPlot, clearSelectedPlot } from '../features/plots/plotsSlice';
import PlotDetails from '../components/PlotDetails';

const PlotDetailsPage = () => {
  const { plotId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const plot = useSelector(state => selectPlotById(state, parseInt(plotId)));

  useEffect(() => {
    if (plot) {
      dispatch(setSelectedPlot(plot));
    } else {
      // If plot not found, redirect to home
      navigate('/');
    }

    // Cleanup when component unmounts
    return () => {
      dispatch(clearSelectedPlot());
    };
  }, [plot, dispatch, navigate]);

  if (!plot) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <h1 className="text-2xl font-bold text-dark-gray mb-2">Plot Not Found</h1>
          <p className="text-text-gray mb-4">The requested plot could not be found.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-govt-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Return to Grid
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Grid
            </button>
            <h1 className="text-xl font-semibold text-dark-gray">Plot Details</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Plot Details Content */}
      <div className="py-8">
        <PlotDetails />
      </div>
    </div>
  );
};

export default PlotDetailsPage;
