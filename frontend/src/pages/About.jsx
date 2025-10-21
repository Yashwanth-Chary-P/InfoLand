import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-gray mb-4">About InfoLand</h1>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Your comprehensive platform for land analysis and construction recommendations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold text-dark-gray mb-4">Our Mission</h2>
            <p className="text-text-gray leading-relaxed">
              To provide accurate land analysis and construction recommendations that help developers, 
              investors, and government agencies make informed decisions about land development projects.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-semibold text-dark-gray mb-4">Our Vision</h2>
            <p className="text-text-gray leading-relaxed">
              To become the leading platform for land intelligence, connecting the right projects 
              with the right builders and creating sustainable development solutions.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-8 shadow-sm border mb-12">
          <h2 className="text-2xl font-semibold text-dark-gray mb-6 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-semibold text-dark-gray mb-2">Interactive Grid</h3>
              <p className="text-sm text-text-gray">Visual representation of land plots with color-coded ownership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-dark-gray mb-2">Detailed Analysis</h3>
              <p className="text-sm text-text-gray">Comprehensive soil analysis and suitability assessments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-semibold text-dark-gray mb-2">Builder Recommendations</h3>
              <p className="text-sm text-text-gray">Curated list of qualified builders for each project type</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-semibold text-dark-gray mb-2">Professional Network</h3>
              <p className="text-sm text-text-gray">Connect with verified construction professionals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-dark-gray mb-2">Market Intelligence</h3>
              <p className="text-sm text-text-gray">Real-time data on land values and development trends</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-dark-gray mb-2">Sustainable Development</h3>
              <p className="text-sm text-text-gray">Environmentally conscious construction recommendations</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg p-8 shadow-sm border mb-12">
          <h2 className="text-2xl font-semibold text-dark-gray mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-govt-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Explore the Grid</h3>
              <p className="text-sm text-text-gray">Browse through our interactive land grid to find plots of interest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-private-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Analyze Details</h3>
              <p className="text-sm text-text-gray">Click on any plot to view detailed soil analysis and suitability data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Get Recommendations</h3>
              <p className="text-sm text-text-gray">Receive curated construction recommendations with verified builders</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-govt-green to-private-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 opacity-90">
            Explore our platform and discover the perfect land for your next project
          </p>
          <button className="bg-white text-govt-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Land Grid
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
