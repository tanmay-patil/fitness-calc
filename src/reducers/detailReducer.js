import { UPDATE_BMI, UPDATE_BMR, UPDATE_TITLE } from "../constants/actionTypes";

const initialState = {
    BMI: '',
    BMR: ''
};

export const calcDetailsReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_BMI:
            return { ...state, BMI: action.payload };

        case UPDATE_BMR:
            return { ...state, BMR: action.payload };

        default:
            return state;
    }
};

export const appTitleReducer = (state = 'Fitness Calculator Home', action) => {
    switch (action.type) {

        case UPDATE_TITLE:
            return action.payload;

        default:
            return state;
    }
};