import { Link } from 'react-router-dom';
import { Map, Grid3X3, ArrowRight, Building, MapPin, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Land Insight Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover land details, suitability, and construction recommendations in one place. 
            Explore plots through interactive maps or browse detailed cards.
          </p>
          
          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Interactive Maps</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Building className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Construction Insights</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Expert Recommendations</span>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/cards" 
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 w-64 text-center hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Grid3X3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Select From Cards</h3>
              <p className="text-gray-500 text-sm mb-4">Browse plots in an organized card layout</p>
              <div className="flex items-center justify-center text-blue-600 font-medium">
                <span>Explore Cards</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/map" 
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 w-64 text-center hover:scale-105"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Map className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Select From Map</h3>
              <p className="text-gray-500 text-sm mb-4">Interactive map with clickable plot areas</p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>View Map</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/plot" 
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 w-64 text-center hover:scale-105"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Map className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Select From Map</h3>
              <p className="text-gray-500 text-sm mb-4">Interactive map with clickable plot areas</p>
              <div className="flex items-center justify-center text-green-600 font-medium">
                <span>View Map</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">21</div>
              <div className="text-gray-600">Available Plots</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Soil Types</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Construction Types</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

