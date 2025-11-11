import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import CardSelection from './pages/CardSelection/CardSelection.jsx';
import MapSelection from './pages/ColonyMap/MapSelection.jsx';
import PlotDetailsPage from './components/PlotDetailsPage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PlotMap from './pages/MapSelection/PlotMap.jsx';
import StatsPage from './pages/Home/StatsPage.jsx';
import PlansPage from './pages/PlansPage.jsx';
import WhyUsPage from './pages/Home/WhyUsPage.jsx';
import LawyerPage from './pages/Home/LawyerPage.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<CardSelection />} />
              <Route path="/map" element={<MapSelection />} />
              <Route path="/plot" element={<PlotMap />} />
              <Route path="/plot/:plotId" element={<PlotDetailsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/stats" element={<StatsPage />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/whyus" element={<WhyUsPage />} />
              <Route path="/lawyers" element={<LawyerPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

