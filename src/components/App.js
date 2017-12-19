import React, { Component } from 'react';
import CustomHeader from './CustomHeader';
import Whomst from './Whomst';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CustomHeader />
        <Whomst />
      </div>
    );
  }
}

export default App;
