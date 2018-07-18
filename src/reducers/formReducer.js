import {
    combineForms
} from 'react-redux-form';

const initialUserDetails = {
    firstName: 'John',
    lastName: 'Doe',
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