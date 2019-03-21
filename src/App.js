import React, { Component } from 'react';
import './App.css';

import SelectionPage from './containers/Pages/SelectionPage';
import FittingPage from './containers/Pages/FittingPage';

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
