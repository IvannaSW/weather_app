import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

const TemperatureUnitsSwitch = ({ onToggle }) => {
    const [toggled, setToggled] = useState(false);

    const handleChange = () => {
        setToggled(!toggled);
        onToggle();
    };

    return (
        <div>
            <span>Cel</span> <Switch checked={toggled} onChange={handleChange} color="primary" />{' '}
            <span>Far</span>
        </div>
    );
};

TemperatureUnitsSwitch.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default TemperatureUnitsSwitch;
