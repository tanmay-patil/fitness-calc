import React, { Component } from 'react';
import './BMR.scss';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updateAppTitle } from "../../actions/";
import { withStyles } from '@material-ui/core/styles';

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppTitle: (title) => dispatch(updateAppTitle(title))
    };
};

const styles = {
    resultCard: {
        marginTop: "10pt"
    }
}

class BMR extends Component {

    componentDidMount() {
        this.props.updateAppTitle("BMR");
    }

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

const _BMR = withStyles(styles)(BMR);

export default connect(null, mapDispatchToProps)(_BMR);
