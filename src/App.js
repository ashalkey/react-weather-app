import React, {Component} from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";

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
    return Number.parseFloat((k - 273.15) * (9/5) + 32).toFixed(2);
  }

  getWeather = (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: `${city},${country}`,
        APPID: API_KEY
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({
        temperature: `${this.convertKelvinToFarenheit(response.data.list[0].main.temp)} °F`,
        city: response.data.city.name,
        country: response.data.city.country,
        humidity: response.data.list[0].main.humidity,
        description: response.data.list[0].weather[0].description,
        error: ""
      });
    })
    .catch(function(error){
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }  
};

export default App;
