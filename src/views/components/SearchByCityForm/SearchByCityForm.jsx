import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { setLocation, requestCurrentWeather } from '../../../state/ducks/weather/actions';
import PropTypes from 'prop-types';
import './SearchByCityForm.css';

/*TODO:
- validation for search input
- show error messages
- autocomplete for search
*/

const SearchByCityForm = ({ setLocation, requestCurrentWeather }) => {
    const [city, setCity] = useState('');

    const handleChange = (e) => setCity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(city);
        requestCurrentWeather(city);
        setCity('');
    };

    return (
        <>
            <form className="formContainer" onSubmit={handleSubmit}>
                <TextField placeholder="Enter the city here" value={city} onChange={handleChange} />
                <Button variant="contained" color="primary" type="submit">
                    GO
                </Button>
            </form>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestCurrentWeather: (city) => dispatch(requestCurrentWeather(city)),
        setLocation: (city) => dispatch(setLocation(city))
    };
};

SearchByCityForm.propTypes = {
    requestCurrentWeather: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SearchByCityForm);
