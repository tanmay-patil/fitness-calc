import React, { Component } from 'react';
import './UserDetails.scss';
import Typography from '@material-ui/core/Typography';
import { Control, Form } from 'react-redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

class UserDetails extends Component {

    handleSubmit() {
        window.open('#/', '_self');
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

                                <Control
                                    model=".height"
                                    component={MaterialTextField}
                                    label="Height"
                                    id="height"
                                    type="number"
                                    adornment="cms"
                                    val={this.props.basicUserForm.height}
                                />

                                <Control
                                    model=".weight"
                                    component={MaterialTextField}
                                    label="Weight"
                                    id="weight"
                                    type="number"
                                    adornment="kgs"
                                    val={this.props.basicUserForm.weight}
                                />

                                <div className="button-container" onClick={this.handleSubmit.bind(this)}>
                                    <MaterialButton text="Let's Go" />
                                </div>
                            </Form>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        );
    }
}

UserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const _UserDetails = withStyles(styles)(UserDetails);

export default connect(mapStateToProps, null)(_UserDetails);
