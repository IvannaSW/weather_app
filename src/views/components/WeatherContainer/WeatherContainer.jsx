import React, { useCallback } from 'react';
import CurrentWeather from './CurrentWeather';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import LabeledSwitch from '../../UI/LabeledSwitch';
import { changeDegreeType } from '../../../state/features/weather/actions';
import DailyForecast from './DailyForecast/DailyForecast';

/*
TODO:
- implement better 'loading...' element (spinner or message)
- refactoring files structure for children components and css styles
*/

const WeatherContainer = () => {
    const unitsLabels = { left: 'Cel', right: 'Far' };

    const loading = useSelector((state) => state.weather.isFetching);
    const weatherData = useSelector((state) => state.weather.weather);
    const forecastData = useSelector((state) => state.weather.forecast);
    const tempUnit = useSelector((state) => state.weather.tempUnit);
    const fetchError = useSelector((state) => state.weather.errorMessage);

    const dispatch = useDispatch();
    const changeDegreeTypes = useCallback(() => dispatch(changeDegreeType()), []);

    return (
        <Grid container spacing={1}>
            {fetchError && (
                <Grid item xs={12}>
                    <Typography color="error" align="center">
                        Oops something went wrong ({fetchError})
                    </Typography>
                </Grid>
            )}
            <Grid item xs={5}>
                {loading ? (
                    <CircularProgress />
                ) : weatherData ? (
                    <CurrentWeather weatherData={weatherData} tempUnit={tempUnit} />
                ) : null}
            </Grid>
            <Grid item xs={7}>
                {loading ? (
                    <CircularProgress />
                ) : forecastData ? (
                    <DailyForecast forecastData={forecastData} tempUnit={tempUnit} />
                ) : null}
            </Grid>
            {weatherData ? (
                <Grid item xs={12}>
                    <LabeledSwitch
                        onToggle={changeDegreeTypes}
                        labels={unitsLabels}
                        checked={tempUnit === 'F'}
                    />
                </Grid>
            ) : null}
        </Grid>
    );
};

export default WeatherContainer;
