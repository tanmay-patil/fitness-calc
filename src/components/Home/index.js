import React, { Component } from 'react';
import './Home.scss';
import Typography from '@material-ui/core/Typography'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Typography variant="title" color="inherit">
                    HOME Component
                </Typography>
            </div>
        );
    }
}

export default Home;
