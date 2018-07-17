import { UPDATE_BMI, UPDATE_BMR } from "../constants/actionTypes";

export const bmiReducer = (state = '', action) => {
    switch (action.type) {

        case UPDATE_BMI:
            return action.payload;

        default:
            return state;
    }
};

export const bmrReducer = (state = '', action) => {
    switch (action.type) {

        case UPDATE_BMR:
            return action.payload;

        default:
            return state;
    }
};