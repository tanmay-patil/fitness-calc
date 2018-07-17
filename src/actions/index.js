import { UPDATE_BMI, UPDATE_BMR, UPDATE_TITLE } from "../constants/actionTypes";

export function udpateBMI(val) {
    return {
        type: UPDATE_BMI,
        payload: val
    };
}

export function udpateBMR(val) {
    return {
        type: UPDATE_BMI,
        payload: val
    };
}

export function updateAppTitle(val) {
    return {
        type: UPDATE_TITLE,
        payload: val
    };
}