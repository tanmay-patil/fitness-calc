import { UPDATE_TITLE } from "../constants/actionTypes";



export const appTitleReducer = (state = 'Fitness Calculator Home', action) => {
    switch (action.type) {

        case UPDATE_TITLE:
            return action.payload;

        default:
            return state;
    }
};