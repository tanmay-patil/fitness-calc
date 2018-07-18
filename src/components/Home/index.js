import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import UserDetails from "../UserDetails/";
import Typography from '@material-ui/core/Typography';
import './Home.scss';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    modal: {
        top: `33%`,
        margin: `auto`,
        maxWidth: '230px'
    }
});


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false }
    }

    handleClose() {
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="Home">
                <Modal
                    className={this.props.classes.modal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                >
                    <div className="modal-body">
                        <UserDetails handleClose={this.handleClose.bind(this)} />
                    </div>
                </Modal>
            </div>
        );
    }
}
// We need an intermediary variable for handling the recursive nesting.
const _Home = withStyles(styles)(Home);

export default _Home;
