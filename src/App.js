import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import LabsPage from './pages/LabsPage';
import GamePage from './pages/GamePage';
import InventoryPage from './pages/InventoryPage';
import ThiefPage from './pages/ThiefPage';
import MarketMushPage from './pages/MarketMushPage';
import MarketThiefPage from './pages/MarketThiefPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoryPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/Thief" element={<ThiefPage />} />
          <Route path="/MarketMush" element={<MarketMushPage />} />
          <Route path="/MarketThief" element={<MarketThiefPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
