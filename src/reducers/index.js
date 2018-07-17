import { combineReducers } from 'redux';
import { bmiReducer, bmrReducer } from './detailReducer';

import { FormReducer } from "./formReducer";

export default combineReducers({
    form: FormReducer,
    bmi: bmiReducer,
    bmr: bmrReducer
});
