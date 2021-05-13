import React from 'react';
import { Switch, Typography, Grid } from '@material-ui/core/';
import PropTypes from 'prop-types';

const LabeledSwitch = ({ onToggle, labels, checked }) => {
    const { left, right } = labels;

    return (
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={0}>
                <Grid item color="primary">
                    <Typography color="primary">{left}</Typography>
                </Grid>
                <Grid item>
                    <Switch checked={checked} onChange={onToggle} color="primary" />
                </Grid>
                <Grid item color="primary">
                    <Typography color="primary">{right}</Typography>
                </Grid>
            </Grid>
        </Typography>
    );
};

LabeledSwitch.propTypes = {
    onToggle: PropTypes.func.isRequired,
    labels: PropTypes.object,
    checked: PropTypes.any
};

export default LabeledSwitch;
