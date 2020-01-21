import { CONSTANTS } from "../constants";

export function ChangeLoadingState(payload) {
    return {type: CONSTANTS.ACTION_TYPE.LOADING_STATE, payload}
}