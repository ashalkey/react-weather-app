import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";
import './App.css';

const API_KEY = "2e1c5a3fbaca4a3d9d14564ae28c29da";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    error: undefined,
    description: undefined,
  }

  convertKelvinToFarenheit = (k) => {
    return Number.parseFloat((k - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: `${city},${country}`,
          APPID: API_KEY
        }
      })
        .then((response) => {
          this.setState({
            temperature: `${this.convertKelvinToFarenheit(response.data.list[0].main.temp)} °F`,
            city: response.data.city.name,
            country: response.data.city.country,
            humidity: response.data.list[0].main.humidity,
            description: response.data.list[0].weather[0].description,
            error: undefined
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      this.setState({
        error: "Please enter a city AND country."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Titles />
            </div>
            <div className="col-md-6">
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
