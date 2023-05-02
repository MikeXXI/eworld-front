import React, { Component } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faCloud, faCloudSun, faWind, faTint} from '@fortawesome/free-solid-svg-icons';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Nice&lang=fr&appid=f1958f974dec95734469cea34676fd58`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weatherData: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { weatherData } = this.state;

    if (!weatherData) {
      return <Box sx={{ display: "flex"}}>
        <CircularProgress />
      </Box>;
    }

    const temperature = Math.round(weatherData.main.temp - 273.15);
    const description = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const windIcon = <FontAwesomeIcon icon={faWind} />;
    const humidityIcon = <FontAwesomeIcon icon={faTint} />;

    let icon;
    if (description.includes('soleil')) {
      icon = <FontAwesomeIcon icon={faSun} />;
    } else if (description.includes('nuageux')) {
      icon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      icon = <FontAwesomeIcon icon={faCloudSun} />;
    }

    return (
      <div style={{ color: 'white', background: '#9CECFF', borderRadius: 20, padding: 20, height: '50%'}}>
        <h2>NICE</h2>
        <p style={{fontSize: 20, fontWeight: 'bold'}}>{temperature}°C</p>
        <p>{icon}</p>
        <p>{windIcon} {windSpeed} m/s</p>
        <p>{humidityIcon} {humidity}%</p>
      </div>
    );
  }
}

export default Weather;
