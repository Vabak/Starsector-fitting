import React, { Component } from 'react';
import './App.css';

import SelectionPage from './components/Pages/SelectionPage/SelectionPage';
import FittingPage from './components/Pages/FittingPage/FittingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectionPage />
        <FittingPage />
      </div>
    );
  }
}

export default App;
