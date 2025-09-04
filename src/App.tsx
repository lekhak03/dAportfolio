import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Analytics } from './pages/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-terminal-bg text-terminal-text relative overflow-x-hidden">
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;