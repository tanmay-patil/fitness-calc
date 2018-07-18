import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


export const MaterialInputText = (props) => (
    <div className="input-field">
        <FormControl>
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
            <Input value={props.val} type={props.type} id={props.id} {...props} />
        </FormControl>
    </div>
);

export const MaterialTextField = (props) => (
    <div className="text-field">
        <TextField
            {...props}
            label={props.label}
            id={props.id}
            type={props.type}
            InputProps={{
                startAdornment: <InputAdornment position="start">{props.adornment}</InputAdornment>,
            }}
        />
    </div>
);

export const MaterialButton = (props) => (
    <Button onClick={props.handleClick} variant="contained" color="primary">
        {props.text}
    </Button>
);
