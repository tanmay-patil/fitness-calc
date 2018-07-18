import React, { Component } from 'react';
import './BMR.scss';
import Typography from '@material-ui/core/Typography';
import { Control, Form } from 'react-redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAppTitle } from "../../actions/";
import { actions } from 'react-redux-form';

import { MaterialDropDown, MaterialTextField, MaterialButton } from "../../materialComponents/";

const mapStateToProps = (state) => {
    return {
        bmrForm: state.Forms.bmrForm
    };
};

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

const genderRange = [
    {
        value: 1,
        label: 'Male',
    },
    {
        value: 2,
        label: 'Female',
    },
];

const activityRange = [
    {
        value: 1.2,
        label: 'Sitting/lying all day (1.2)',
    },
    {
        value: 1.3,
        label: 'Seated work, no exercise (1.3)',
    },
    {
        value: 1.4,
        label: 'Seated work, light exercise (1.4)',
    },
    {
        value: 1.5,
        label: 'Moderately physical work, no exercise (1.5)',
    },
    {
        value: 1.6,
        label: 'Moderately physcial work, light exercise (1.6)',
    },
    {
        value: 1.7,
        label: 'Moderately physcial work, heavy exercise (1.7)',
    },
    {
        value: 1.8,
        label: 'Heavy work / heavy exercise (1.8)',
    },
    {
        value: 2.0,
        label: 'Extreme physical work / exercise (2.0-2.4)',
    },
];

class BMR extends Component {

    componentDidMount() {
        this.props.updateAppTitle("Basal Metabolic Rate (BMR)");
    }

    handleSubmit() {
        this.calculateBMR();
    }

    attachDispatch(dispatch) {
        this.formDispatch = dispatch;
    }

    updateResult(result) {
        this.formDispatch(actions.change('Forms.bmrForm.result', result));
    }

    calculateBMR() {
        let result = 0;
    }


    render() {

        const showResult = this.props.bmrForm.result === "" ? false : true;

        const ResultCard = () => (<Card className={this.props.classes.resultCard}>
            <CardContent>
                <Typography variant="headline">
                    Result : {this.props.bmrForm.result}
                </Typography>
            </CardContent>
        </Card>);

        return (
            <div className="BMR">
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant="title" color="inherit">
                            <Form model="Forms.bmrForm" onSubmit={this.handleSubmit} getDispatch={(dispatch) => this.attachDispatch(dispatch)}>

                                <div class="form-field">
                                    <Control
                                        model=".gender"
                                        component={MaterialDropDown}
                                        label="Select Gender"
                                        id="gender"
                                        adornment="Gender"
                                        val={this.props.bmrForm.gender}
                                        ranges={genderRange}
                                    />
                                </div>

                                <div class="form-field">
                                    <Control
                                        model=".age"
                                        component={MaterialTextField}
                                        label="Age"
                                        id="age"
                                        type="number"
                                        adornment=""
                                        val={this.props.bmrForm.age}
                                    />
                                </div>

                                <div class="form-field">
                                    <Control
                                        model=".height"
                                        component={MaterialTextField}
                                        label="Height"
                                        id="height"
                                        type="number"
                                        adornment="cms"
                                        val={this.props.bmrForm.height}
                                    />
                                </div>

                                <div class="form-field">
                                    <Control
                                        model=".weight"
                                        component={MaterialTextField}
                                        label="Weight"
                                        id="weight"
                                        type="number"
                                        adornment="kgs"
                                        val={this.props.bmrForm.weight}
                                    />
                                </div>

                                <div class="form-field">
                                    <Control
                                        model=".activityLevel"
                                        component={MaterialDropDown}
                                        label=""
                                        id="activityLevel"
                                        adornment="Activity Level"
                                        val={this.props.bmrForm.activityLevel}
                                        ranges={activityRange}
                                    />
                                </div>

                                <div className="button-container" onClick={this.handleSubmit.bind(this)}>
                                    <MaterialButton text="Calculate" />
                                </div>
                            </Form>
                        </Typography>
                    </CardContent>
                </Card>

                {showResult ? <ResultCard /> : null}
            </div>
        );
    }
}

const _BMR = withStyles(styles)(BMR);

export default connect(mapStateToProps, mapDispatchToProps)(_BMR);
