import { 
    USER_DETAILS, 
    USER_DETAILS_ERR, 
    WEB_USER_OR_STATUS, 
    WEB_TEMP_VAL, 
    LOC_TEMP_VAL,
    WEB_PERM_VAL,
    LOC_PERM_VAL } from "src/redux/actions/users";
const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case USER_DETAILS:
            return [state, action.payload];
        case USER_DETAILS_ERR:
            return {state, errorMessage: action.payload};
        case WEB_USER_OR_STATUS:
            return state = action.payload;
        case WEB_TEMP_VAL:
            return state = action.payload;
        case LOC_TEMP_VAL:
            return state = action.payload;
        case WEB_PERM_VAL:
            return state = action.payload;
        case LOC_PERM_VAL:
            return state = action.payload;
        default :
            return state;
    }
}
