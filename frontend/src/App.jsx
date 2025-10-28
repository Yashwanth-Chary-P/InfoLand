import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CardSelection from './pages/CardSelection.jsx';
import MapSelection from './pages/MapSelection.jsx';
import PlotDetailsPage from './pages/PlotDetailsPage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PlotMap from './pages/PlotMap.jsx';

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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

