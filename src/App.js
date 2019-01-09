import React, {Component} from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = "2e1c5a3fbaca4a3d9d14564ae28c29da";

class App extends Component {

  getWeather = () => {
    axios.get(`api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: "Manchester,uk",
        APPID: API_KEY
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }  
};

export default App;
