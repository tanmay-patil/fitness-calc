import { combineReducers } from 'redux';
import { appTitleReducer } from './detailReducer';

import { FormReducer } from "./formReducer";

export default combineReducers({
    Forms: FormReducer,
    appTitle: appTitleReducer
});
