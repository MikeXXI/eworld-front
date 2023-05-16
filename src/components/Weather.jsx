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
      <div style={{ color: 'white', background: '#9CECFF', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'column', marginRight: '5px'}}>
        <p style={{ margin: '4px' }}>{icon} {description}</p>
        <p style={{ margin: '4px' }}>{windIcon} {windSpeed} m/s</p>
        <p style={{ margin: '4px' }}>{humidityIcon} {humidity}%</p>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p style={{fontSize: "25px", margin: "0"}}>Nice</p>
        <p style={{fontSize: 40, fontWeight: 'bold', margin: '0'}}>{temperature}°C</p>
        </div>
      </div>
    );
  }
}

export default Weather;
