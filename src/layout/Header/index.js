import React, { Component } from 'react';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

    toggleLeftDrawer(open) {
        this.setState({
            left: open
        });
    };

    toggleBottomDrawer(open) {
        this.setState({
            bottom: open
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
                        <Typography onClick={this.toggleLeftDrawer.bind(this, true)} variant="title" color="inherit">
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    anchor="left"
                    open={this.state.left}
                    onClose={this.toggleLeftDrawer.bind(this, false)}
                    onOpen={this.toggleLeftDrawer.bind(this, true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleLeftDrawer.bind(this, false)}
                        onKeyDown={this.toggleLeftDrawer.bind(this, false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>

                <SwipeableDrawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleBottomDrawer.bind(this, false)}
                    onOpen={this.toggleBottomDrawer.bind(this, true)}
                >
                    <Typography variant="title" color="inherit">
                        Created by : Tanmay Patil
                        </Typography>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default Header;
