import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';


export const MaterialInputText = (props) => (
    <FormControl>
        <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
        <Input value={props.val} type={props.type} id={props.id} {...props} />
    </FormControl>
);

export const MaterialTextField = (props) => (
    <TextField
        {...props}
        label={props.label}
        id={props.id}
        type={props.type}
        InputProps={{
            startAdornment: <InputAdornment position="start">{props.adornment}</InputAdornment>,
        }}
    />
);

export const MaterialButton = (props) => (
    <Button onClick={props.handleClick} variant="contained" color="primary">
        {props.text}
    </Button>
);

export const MaterialDropDown = (props) => (
    <TextField
        {...props}
        value={props.val}
        select
        label={props.label}
        InputProps={{
            startAdornment: <InputAdornment position="start">{props.adornment}</InputAdornment>,
        }}
    >
        {props.ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
    </TextField>
);