import React, { useEffect } from 'react';
import SearchByCityForm from '../../components/SearchByCityForm';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import CurrentLocationBtn from '../../components/CurrentLocationBtn';
import { Typography, Grid } from '@material-ui/core';
import { usePosition } from '../../../utilities/usePosition';
import { useDispatch } from 'react-redux';
import {
    requestCurrentWeather,
    requestDailyForecast
} from '../../../state/features/weather/actions';

const DashBoard = () => {
    const { position, error } = usePosition();
    const dispatch = useDispatch();
    useEffect(() => {
        if (position) {
            dispatch(requestCurrentWeather(position));
            dispatch(requestDailyForecast(position));
        }
    }, [position]);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SearchByCityForm />
                <CurrentLocationBtn />
            </Grid>
            <Grid item xs={12}>
                {error && (
                    <Typography align="center" color="error">
                        {error}
                    </Typography>
                )}
                <WeatherContainer />
            </Grid>
        </Grid>
    );
};

export default DashBoard;
