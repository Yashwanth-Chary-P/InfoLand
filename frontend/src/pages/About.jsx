import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">About</h1>
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
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Land & Construction Platform</h2>
            
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                This platform provides an interactive way to explore land plots and their construction potential. 
                Built as a frontend-only Phase-1 implementation, it showcases modern web technologies and user experience design.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Features</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Interactive SVG map with clickable plot areas</li>
                <li>Detailed plot information including soil type, area, and suitability</li>
                <li>Construction recommendations with builder suggestions</li>
                <li>Responsive design optimized for all devices</li>
                <li>Accessibility features including keyboard navigation</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technology Stack</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>React 18 with functional components and hooks</li>
                <li>Redux Toolkit for state management</li>
                <li>React Router DOM for navigation</li>
                <li>TailwindCSS for styling</li>
                <li>Vite for build tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

