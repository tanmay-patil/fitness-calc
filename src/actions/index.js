import { UPDATE_TITLE } from "../constants/actionTypes";

export function updateAppTitle(val) {
    return {
        type: UPDATE_TITLE,
        payload: val
    };
}