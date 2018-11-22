import React, { Component } from 'react';

import './App.css';
import './icomoon/style.css';
import Header from "./components/Header";
import Slider from "./components/Slider";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Slider/>
      </div>
    );
  }
}










export default App;
