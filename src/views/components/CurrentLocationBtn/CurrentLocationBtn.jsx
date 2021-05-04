import React from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentWeatherByLocation } from '../../../state/ducks/weather/actions';

const CurrentLocationBtn = ({ getCurrentWeatherByLocation }) => {
    const handleClick = () => {
        getCurrentWeatherByLocation();
    };
    return (
        <IconButton color="primary" onClick={handleClick}>
            <MyLocationIcon />
        </IconButton>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentWeatherByLocation: () => dispatch(getCurrentWeatherByLocation())
    };
};

CurrentLocationBtn.propTypes = {
    getCurrentWeatherByLocation: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(CurrentLocationBtn);
