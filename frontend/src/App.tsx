import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import BrowseByGenre from './pages/BrowseByGenre';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays at the top for all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/genre/:genre" element={<BrowseByGenre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;