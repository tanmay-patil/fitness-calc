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

export const FormReducer = combineForms({
    basicUserForm: initialUserDetails,
    bmiForm: initialBMI,
}, 'Forms') 