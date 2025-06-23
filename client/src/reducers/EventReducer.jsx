import { useReducer } from "react";

export const EventReducer = (state, action) => {
    switch (action.type) {
        case "SET_EVENTS":
            return action.events;
        case "ADD_EVENT":
            return [...state, action.event];
        default:
            return state;
    }
};
