import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Workshops from './components/Workshops';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

export class App extends Component {
  render() {
    return(
      <div className="app">
        <Navigation/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="workshops" element={<Workshops/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
