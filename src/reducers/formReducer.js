import {
    combineForms
} from 'react-redux-form';

const initialUserDetails = {
    firstName: '',
    lastName: '',
    age: '',
    gender: ''
};

const initialBMI = {
    weight: '',
    height: '',
    result: ''
};

const initialBMR = {
    weight: '',
    height: '',
    age: '',
    gender: '',
    activityLevel: '',
    result: ''
};

export const FormReducer = combineForms({
    basicUserForm: initialUserDetails,
    bmiForm: initialBMI,
    bmrForm: initialBMR,
}, 'Forms') 