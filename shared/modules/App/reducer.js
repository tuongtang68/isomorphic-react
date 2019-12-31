// @flow

import {SIGN_IN} from "./actionTypes";

const initialState = {credential: null};
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...initialState};
        default:
            return {...state};
    }
};
