import React from 'react';
import SearchByCityForm from '../../components/SearchByCityForm/SearchByCityForm';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import Grid from '@material-ui/core/Grid';

const DashBoard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SearchByCityForm />
            </Grid>
            <Grid item xs={12}>
                <WeatherContainer />
            </Grid>
        </Grid>
    );
};

export default DashBoard;
