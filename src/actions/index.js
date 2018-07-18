import { UPDATE_TITLE, UPDATE_BMI_RESULT } from "../constants/actionTypes";

export function updateAppTitle(val) {
    return {
        type: UPDATE_TITLE,
        payload: val
    };
}

export function updateBMIResult(val) {
    return {
        type: UPDATE_BMI_RESULT,
        payload: val
    };
}