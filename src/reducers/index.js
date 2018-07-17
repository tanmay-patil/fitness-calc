import { combineReducers } from 'redux';
import { calcDetailsReducer, appTitleReducer } from './detailReducer';

import { FormReducer } from "./formReducer";

export default combineReducers({
    Forms: FormReducer,
    calcDetails: calcDetailsReducer,
    appTitle: appTitleReducer
});
