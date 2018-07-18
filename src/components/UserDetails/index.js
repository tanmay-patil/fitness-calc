import React, { Component } from 'react';
import './UserDetails.scss';
import Typography from '@material-ui/core/Typography';
import { Control, Form } from 'react-redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAppTitle } from "../../actions/";

import { MaterialInputText, MaterialTextField, MaterialButton } from "../../materialComponents/";

const styles = {
    card: {

    }
}

const mapStateToProps = (state) => {
    return {
        basicUserForm: state.Forms.basicUserForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppTitle: (title) => dispatch(updateAppTitle(title))
    };
};

class UserDetails extends Component {

    handleSubmit() {
        this.props.handleClose();
    }

    componentDidMount() {
        this.props.updateAppTitle("My Profile");
    }

    render() {

        return (
            <div className="UserDetails">
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant="title" color="inherit">
                            <Form model="Forms.basicUserForm" onSubmit={this.handleSubmit}>
                                <Control
                                    model=".firstName"
                                    component={MaterialInputText}
                                    label="First Name"
                                    id="firstName"
                                    type="text"
                                    val={this.props.basicUserForm.firstName}
                                />

                                <Control
                                    model=".lastName"
                                    component={MaterialInputText}
                                    label="Last Name"
                                    id="lastName"
                                    type="text"
                                    val={this.props.basicUserForm.lastName}
                                />

                                <div className="button-container">
                                    <MaterialButton handleClick={this.handleSubmit.bind(this)} text="Let's Go" />
                                </div>
                            </Form>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        );
    }
}

const _UserDetails = withStyles(styles)(UserDetails);

export default connect(mapStateToProps, mapDispatchToProps)(_UserDetails);


UserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    basicUserForm: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        height: PropTypes.string,
        weight: PropTypes.string
    }),
};