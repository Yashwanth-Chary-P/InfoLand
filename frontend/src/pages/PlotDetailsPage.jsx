import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeft, MapPin, Building, Users, Calendar, CheckCircle } from 'lucide-react';

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
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plot Not Found</h2>
          <p className="text-gray-600 mb-6">The plot you're looking for doesn't exist in our database.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Plot {plot.plotId} Details</h1>
                <p className="text-gray-600 mt-1">Comprehensive plot information and construction recommendations</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => navigate('/cards')}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                View All Cards
              </button>
              <button
                onClick={() => navigate('/map')}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                View Map
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plot Information Card */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Plot Information</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  plot.owner === 'Govt' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {plot.owner} Property
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Plot Number</dt>
                    <dd className="text-xl font-semibold text-gray-900">{plot.plotId}</dd>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Area</dt>
                    <dd className="text-xl font-semibold text-gray-900">{plot.area} sq ft</dd>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Soil Type</dt>
                    <dd className="text-xl font-semibold text-gray-900">{plot.soilType}</dd>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Suitability</dt>
                    <dd className="text-xl font-semibold text-gray-900">{plot.suitability}</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Recommended Constructions</h3>
              </div>
              
              <div className="space-y-4">
                {plot.recommendations.map((rec, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{rec.type}</h4>
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Builder:</p>
                    <p className="text-sm font-medium text-blue-600">{rec.builder}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> These recommendations are based on soil analysis and local construction standards. 
                  Consult with certified builders for detailed project planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotDetailsPage;

