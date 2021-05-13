import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import Grid from '@material-ui/core/Grid';

const DailyForecast = ({ forecastData, tempUnit }) => {
    return (
        <Grid container spacing={0}>
            {forecastData.map((day, i) => {
                return <ForecastItem key={i} day={day} tempUnit={tempUnit} />;
            })}
        </Grid>
    );
};

DailyForecast.propTypes = {
    tempUnit: PropTypes.string,
    forecastData: PropTypes.array
};

export default DailyForecast;
