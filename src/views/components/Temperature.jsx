import React from 'react';
import { celciusToFahrenheit } from '../../utilities/unitsConversion';
import PropTypes from 'prop-types';

const Temperature = ({ value, tempUnit }) => {
    if (tempUnit === 'F') {
        return <>{celciusToFahrenheit(value)} F</>;
    }
    return <>{value} °C</>;
};

Temperature.propTypes = {
    value: PropTypes.number,
    tempUnit: PropTypes.string
};

export default Temperature;
