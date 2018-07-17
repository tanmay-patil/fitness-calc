import React, { Component } from 'react';
import './BMR.scss';
import Typography from '@material-ui/core/Typography'

class BMR extends Component {
    render() {
        return (
            <div className="BMR">
                <Typography variant="title" color="inherit">
                    BMR Component
                </Typography>
            </div>
        );
    }
}

export default BMR;
