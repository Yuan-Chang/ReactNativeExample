import { LOAD_LIST } from "./actionTypes";

export const loadList = users => {
    return { type: LOAD_LIST, data: users};
};
