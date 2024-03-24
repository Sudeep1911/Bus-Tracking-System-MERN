import './App.css';
import React from 'react';
import Bus from './components/showBus/showBus';
import Getl from './components/getLocation/getLocation';

function App() {
  return (
    <div className="App">
      <div className="container-lg">
        <header className="app-bar">
          <h2 className="heading">Busses Show</h2>
        </header>

        <div className="grow-in">
          <div className="container">
            <div className="grid-container">
                <div className="locations">
                  <Getl />
                </div>
                <div className="table">
                  <Bus />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
