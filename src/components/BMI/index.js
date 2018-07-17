import React, { Component } from 'react';
import './BMI.scss';
import Typography from '@material-ui/core/Typography'

class BMI extends Component {
    render() {
        return (
            <div className="BMI">
                <Typography variant="title" color="inherit">
                    BMI Component
                </Typography>
            </div>
        );
    }
}

export default BMI;
