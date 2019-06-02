import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import caro from './components/HomeCarousel';

function App() {
  return (
      <div>
          <Navbar />
          <div>
              <caro/>
          </div>
      </div>

  );
}

export default App;
