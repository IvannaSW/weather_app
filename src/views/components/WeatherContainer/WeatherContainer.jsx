import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';

/*
TODO:
- implement better 'loading...' element (spinner or message)
- refactoring files structure for children components and css styles
*/

const WeatherContainer = ({ loading, weatherData }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={5}>
                {loading ? (
                    <CircularProgress />
                ) : weatherData ? (
                    <CurrentWeather weatherData={weatherData} />
                ) : null}
            </Grid>
            <Grid item xs={7}>
                <div>Forecast</div>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.weather.isFetching,
        weatherData: state.weather.weather
    };
};

WeatherContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    weatherData: PropTypes.object
};

export default connect(mapStateToProps)(WeatherContainer);
