import { UPDATE_TITLE, UPDATE_BMI_RESULT } from "../constants/actionTypes";

export const appTitleReducer = (state = 'Fitness Calculator Home', action) => {
    switch (action.type) {

        case UPDATE_TITLE:
            return action.payload;

        default:
            return state;
    }
};

export const BMIReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_BMI_RESULT:
            return { ...state, result: action.payload };

        default:
            return state;
    }
};