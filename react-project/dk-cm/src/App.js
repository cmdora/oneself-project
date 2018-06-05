import React, { Component } from 'react';
import './App.css';
import 'swiper/dist/css/swiper.min.css'
import RouterConfig from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterConfig />
      </div>
    );
  }
}

export default App;
