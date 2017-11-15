import { LOAD_LIST } from '../actions/actionTypes'

export function userReducer(state = [], action) {

    const {type, data} = action;

    switch (type)
    {
        case LOAD_LIST:
            return data;
        default:
            return state;
    }
}

