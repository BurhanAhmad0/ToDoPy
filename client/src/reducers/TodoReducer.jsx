import { useReducer } from "react";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return action.todos;
        case "ADD_TODO":
            return [...state, action.todo];
        case "DELETE_TODO":
            return state.filter(todo => todo._id !== action.todoId);
        case "UPDATE_TODO":
            return state.map(todo => {
                if (todo._id === action.todoId) {
                    return { ...todo, ...action.updatedData };
                }
                return todo;
            });
        case "UPDATE_TODO_STATUS":
            return state.map(todo => {
                if (todo._id === action.todoId) {
                    return { ...todo, ...action.updatedData };
                }
                return todo;
            })
        default:
            return state;
    }
};
