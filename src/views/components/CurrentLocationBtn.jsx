import React from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { getCurrentWeatherByLocation } from '../../state/features/weather/actions';

const CurrentLocationBtn = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getCurrentWeatherByLocation());
    };
    return (
        <IconButton color="primary" onClick={handleClick}>
            <MyLocationIcon />
        </IconButton>
    );
};

export default CurrentLocationBtn;
