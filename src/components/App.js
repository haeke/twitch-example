import React, { Component } from 'react';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import Whomst from './Whomst';

class App extends Component {
  constructor() {
    super();
    this.state = {
        users: ['cosmos', 'imaqtpie'],
        results: [],
      };
  }

  componentDidMount() {
    var example = this.state.users.map((item) => axios.get(`https://api.twitch.tv/kraken/streams/${item}?client_id=geva5gbqt0vn2sh6q15z2xwh2vurlk`).then(res =>
    console.log(res.data.stream)));
    console.log(example);
  }

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
