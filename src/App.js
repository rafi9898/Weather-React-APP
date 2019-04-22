import React, { Component } from "react";
import Search from "./components/SearchBox/Search";
import Item from "./components/ItemBox/Item";
import "./App.css";

const API_KEY = "fafd5e8b76df4944830101136192204";

class App extends Component {
  state = {
    detailsCity: []
  };

  getDetailsHandler = async e => {
    const cityName = e.target.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${cityName}`
    );
    const data = await api_call.json();
    this.setState({
      detailsCity: data
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Search getDetails={this.getDetailsHandler} />
        <Item details={this.state.detailsCity} />
      </div>
    );
  }
}

export default App;
