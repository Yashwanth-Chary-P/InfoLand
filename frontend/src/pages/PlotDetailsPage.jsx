import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PlotCard from '../components/PlotCard.jsx';

const PlotDetailsPage = () => {
  const { plotId } = useParams();
  const navigate = useNavigate();
  const plots = useSelector(state => state.plots.plots);
  
  // Find the plot by plotId
  const plot = plots.find(p => p.plotId === parseInt(plotId));

  if (!plot) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plot Not Found</h2>
          <p className="text-gray-600 mb-6">The plot you're looking for doesn't exist in our database.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Plot Details</h1>
              <p className="text-gray-600 mt-2">Detailed information and construction recommendations</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Map
            </button>
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <PlotCard plot={plot} />
        </div>
      </main>
    </div>
  );
};

export default PlotDetailsPage;

