import { GET_USERS,SET_USERS,GET_LOADING_STATE,SET_LOADING_STATE } from '../actions/actionTypes'

export function loadingDynamicListViewReducer(state = {users:{},loadingState:0}, action) {

    const {type, data} = action;

    switch (type)
    {
        case SET_USERS:
            return { ... state, users : data};
        case GET_USERS:
            return state.users;
        case SET_LOADING_STATE:
            return { ... state, loadingState:data};
        case GET_LOADING_STATE:
            return state.loadingState;
        default:
            return state;

    }
}

