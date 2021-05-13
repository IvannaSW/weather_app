import React, { useState } from 'react';
import { Button, TextField, List, ListItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
    setLocation,
    requestCurrentWeather,
    requestDailyForecast
} from '../../state/features/weather/actions';
import PlacesAutocomplete from 'react-places-autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 200,
        fontSize: '12px',
        position: 'absolute'
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff'
        }
    }
}));

const SearchByCityForm = () => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (city) => {
        setCity(city);
        setError(false);
    };
    const handleSelect = (city) => {
        setCity(city);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '') {
            setError('Please choose correct city');
        } else {
            dispatch(setLocation(city));
            dispatch(requestCurrentWeather(city));
            dispatch(requestDailyForecast(city));
            setCity('');
        }
    };

    const searchOptions = {
        types: ['(cities)']
    };

    const renderInputField = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
        <div>
            <TextField
                {...getInputProps()}
                placeholder="Choose city"
                error={!!error}
                helperText={error}
            />
            <List className={classes.list}>
                {suggestions.map((suggestion, i) => (
                    <ListItem
                        {...getSuggestionItemProps(suggestion)}
                        key={i}
                        button
                        className={classes.item}>
                        {suggestion.description}
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <form className="formContainer" onSubmit={handleSubmit}>
                <PlacesAutocomplete
                    value={city}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    searchOptions={searchOptions}>
                    {renderInputField}
                </PlacesAutocomplete>
                <Button variant="contained" color="primary" type="submit">
                    GO
                </Button>
            </form>
        </div>
    );
};

export default SearchByCityForm;
