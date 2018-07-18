import React, { Component } from 'react';
import './BMI.scss';
import Typography from '@material-ui/core/Typography';
import { Control, Form } from 'react-redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAppTitle } from "../../actions/";

import { MaterialInputText, MaterialTextField, MaterialButton } from "../../materialComponents/";

const mapStateToProps = (state) => {
    return {
        bmiForm: state.Forms.bmiForm
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

class BMI extends Component {

    componentDidMount() {
        this.props.updateAppTitle("BMI CalC");
    }

    handleSubmit() {
        calculateBMI();
    }

    calculateBMI() {
        let result = 0;

    }

    render() {

        const showResult = this.props.bmiForm.result === "" ? false : true;

        const ResultCard = () => (<Card className={this.props.classes.resultCard}>
            <CardContent>
                <Typography>
                    Result
                </Typography>
            </CardContent>
        </Card>);

        return (
            <div className="BMI">
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant="title" color="inherit">
                            <Form model="Forms.bmiForm" onSubmit={this.handleSubmit}>

                                <Control
                                    model=".height"
                                    component={MaterialTextField}
                                    label="Height"
                                    id="height"
                                    type="number"
                                    adornment="cms"
                                    val={this.props.bmiForm.height}
                                />

                                <Control
                                    model=".weight"
                                    component={MaterialTextField}
                                    label="Weight"
                                    id="weight"
                                    type="number"
                                    adornment="kgs"
                                    val={this.props.bmiForm.weight}
                                />

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

const _BMI = withStyles(styles)(BMI);

export default connect(mapStateToProps, mapDispatchToProps)(_BMI);


BMI.propTypes = {
    classes: PropTypes.object.isRequired,
    bmiForm: PropTypes.shape({
        age: PropTypes.string,
        height: PropTypes.string,
        weight: PropTypes.string
    }),
};