import React from 'react';
import Home from './pages/Home';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <>
      {/* Background with gradient and wave shapes */}
      <div className="app-background">
        <div className="wave-shape wave-shape-1" />
        <div className="wave-shape wave-shape-2" />
        <div className="wave-shape wave-shape-3" />
        <div className="wave-shape wave-shape-4" />
        <div className="wave-shape wave-shape-5" />
      </div>

      {/* Main Content Container */}
      <div className="container app-container">
        <Home />
      </div>
    </>
  );
};

export default App;
