import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Temperature from '../../Temperature';
import Grid from '@material-ui/core/Grid';
import { Card, Typography } from '@material-ui/core';

const ForecastItem = ({ day, tempUnit }) => {
    const { temp } = day.main;
    const { description, icon } = day.weather[0];
    const { dt } = day;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <Grid item xs={6}>
            <Card variant="outlined" align="center">
                <Typography color="primary" align="center" variant="caption">
                    {moment.unix(dt).format('dddd')}
                </Typography>
                <Typography color="primary" align="center" variant="caption" display="block">
                    <Temperature value={temp} tempUnit={tempUnit} />
                </Typography>
                <img src={weatherIconUrl} alt="weather icon" height="75"></img>
                <Typography color="primary" align="center" variant="caption" display="block">
                    {description}
                </Typography>
            </Card>
        </Grid>
    );
};

ForecastItem.propTypes = {
    tempUnit: PropTypes.string,
    day: PropTypes.object
};

export default ForecastItem;
