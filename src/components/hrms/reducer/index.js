import { CONSTANTS } from "../constants";

const initialState = {
    loading: false,
}

function rootReducer(state = initialState, action) {
    if(action.type == CONSTANTS.ACTION_TYPE.LOADING_STATE) {
        state.loading = action.payload;
    }
    return state;
}

export default rootReducer;