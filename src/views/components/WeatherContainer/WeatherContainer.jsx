import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import TemperatureUnitsSwitch from '../TemperatureSwitch/TemperatureUnitsSwitch';
import { changeDegreeType } from '../../../state/ducks/weather/actions';

/*
TODO:
- implement better 'loading...' element (spinner or message)
- refactoring files structure for children components and css styles
*/

const WeatherContainer = ({ loading, weatherData, tempUnit, changeDegreeType }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={5}>
                {loading ? (
                    <CircularProgress />
                ) : weatherData ? (
                    <CurrentWeather weatherData={weatherData} tempUnit={tempUnit} />
                ) : null}
            </Grid>
            <Grid item xs={7}>
                <div>Forecast</div>
            </Grid>
            {weatherData ? (
                <Grid item xs={12}>
                    <TemperatureUnitsSwitch onToggle={changeDegreeType} />
                </Grid>
            ) : null}
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.weather.isFetching,
        weatherData: state.weather.weather,
        tempUnit: state.weather.tempUnit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDegreeType: () => dispatch(changeDegreeType())
    };
};

WeatherContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    changeDegreeType: PropTypes.func.isRequired,
    tempUnit: PropTypes.string,
    weatherData: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
