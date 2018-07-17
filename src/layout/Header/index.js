import React, { Component } from 'react';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Sidebar from "../Sidebar/"

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
    }

    toggleDrawer(open) {
        this.setState({
            left: open
        });
    };

    render() {
        const { list, fullList } = styles;

        const sideList = (
            <div className={list}>
                <List><Sidebar /></List>
            </div>
        );

        return (
            <div className="Header">
                <AppBar position="static">
                    <Toolbar>
                        <Typography onClick={this.toggleDrawer.bind(this, true)} variant="title" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer.bind(this, false)}
                    onOpen={this.toggleDrawer.bind(this, true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer.bind(this, false)}
                        onKeyDown={this.toggleDrawer.bind(this, false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default Header;
