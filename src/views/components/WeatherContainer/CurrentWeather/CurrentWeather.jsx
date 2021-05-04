import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

/* TODO:
- improve how UI looks;
- use custom weather icons, not from OpenWeather
*/

const CurrentWeather = ({ weatherData }) => {
    const { temp, temp_min, temp_max, pressure, humidity } = weatherData.main;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    return (
        <Card variant="outlined" align="center">
            <Typography color="primary" align="center" variant="h6" gutterBottom>
                {weatherData.name}, {weatherData.sys.country}
            </Typography>
            <Typography color="primary" align="center">
                {moment.unix(weatherData.dt).format('dddd HH:mm A')}
            </Typography>
            <img src={weatherIconUrl} alt="weather icon"></img>
            <Typography color="primary" align="center">
                {temp} &deg;
            </Typography>
            <Typography color="primary" align="center">
                {weatherData.weather[0].description}
            </Typography>
            <Typography color="primary" align="center" display="block" variant="caption">
                <ArrowUpwardIcon /> {temp_max} &deg; <ArrowDownwardIcon /> {temp_min} &deg;
            </Typography>
            <Typography color="primary" align="center" display="block" variant="caption">
                Pressure: {pressure} hPa Humidity: {humidity} %
            </Typography>
            <Typography color="primary" align="center" display="block" variant="caption">
                Wind: {weatherData.wind.speed} m/s Cloudiness: {weatherData.clouds.all} %
            </Typography>
        </Card>
    );
};

CurrentWeather.propTypes = {
    weatherData: PropTypes.object
};

export default CurrentWeather;
