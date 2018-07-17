import {
    combineForms
} from 'react-redux-form';

const initialUserDetails = {
    firstName: '',
    lastName: '',
    weight: '',
    height: '',
    age: ''
};

export const FormReducer = combineForms({
    basicUserForm: initialUserDetails
}, 'form') 