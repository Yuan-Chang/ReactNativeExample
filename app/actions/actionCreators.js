import { SET_USERS,SET_LOADING_STATE,GET_LOADING_STATE,GET_USERS } from "./actionTypes";

export const setUsers = users => {
    return { type: SET_USERS, data: users};
};

export const setLoadingState = loadingState => {
    return { type: SET_LOADING_STATE, data: loadingState};
};

