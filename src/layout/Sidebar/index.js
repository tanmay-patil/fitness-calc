// This file is shared across the demos.

import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


class Sidebar extends Component {

    loadComponent(type) {
        switch (type) {
            case "BMI":
                window.open('#/BMI', '_self');
                break;
            case "BMR":
                window.open('#/BMR', '_self');
                break;
            case "UserDetails":
                window.open('#/UserDetails', '_self');
                break;
            case "Home":
                window.open('#/', '_self');
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <div>
                <ListItem button onClick={this.loadComponent.bind(this, "UserDetails")}>
                    <Avatar alt="User Details" src={require('../../assets/icons/icon-user.png')} />
                    <ListItemText primary="My Profile" />
                </ListItem>
                <ListItem button onClick={this.loadComponent.bind(this, "BMI")}>
                    <Avatar alt="BMI" src={require('../../assets/icons/icon-bmi.png')} />
                    <ListItemText primary="My BMI" />
                </ListItem>
                <ListItem button onClick={this.loadComponent.bind(this, "BMR")}>
                    <Avatar alt="BMR" src={require('../../assets/icons/icon-bmr.png')} />
                    <ListItemText primary="My BMR" />
                </ListItem>
            </div>
        );
    }
}

export default Sidebar;