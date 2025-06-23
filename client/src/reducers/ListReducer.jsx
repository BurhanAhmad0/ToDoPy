import { useReducer } from "react";

export const ListReducer = (state, action) => {
    switch (action.type) {
        case "SET_LISTS":
            return action.lists;
        case "ADD_LIST":
            return [...state, action.list];
        default:
            return state;
    }
};
