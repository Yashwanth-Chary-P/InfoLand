import PlotGrid from '../components/PlotGrid.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Land & Construction Platform</h1>
          <p className="text-gray-600 mt-2">Interactive colony map with plot details and construction recommendations</p>
        </div>
      </header>
      
      <main className="py-8">
        <PlotGrid />
      </main>
    </div>
  );
};

export default Home;

