// This file is shared across the demos.

import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { connect } from 'react-redux';
import { updateAppTitle } from "../../actions/";

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppTitle: (title) => dispatch(updateAppTitle(title))
    };
};

class Sidebar extends Component {

    loadComponent(type) {
        switch (type) {
            case "BMI":
                window.open('#/BMI', '_self');
                break;
            case "BMR":
                window.open('#/BMR', '_self');
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <div>
                <ListItem button>
                    <Avatar alt="BMI" onClick={this.loadComponent.bind(this, "BMI")} src={require('../../assets/icons/icon-bmi.png')} />
                    <ListItemText primary="My BMI" />
                </ListItem>
                <ListItem button>
                    <Avatar alt="BMR" onClick={this.loadComponent.bind(this, "BMR")} src={require('../../assets/icons/icon-bmr.png')} />
                    <ListItemText primary="My BMR" />
                </ListItem>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Sidebar);