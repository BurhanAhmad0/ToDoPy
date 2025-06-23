import { useState, useEffect, createContext, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";
import { TodoReducer } from '../reducers/TodoReducer.jsx'
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const initialState = [];
    const [Todos, dispatch] = useReducer(TodoReducer, initialState);
    const [todoInput, setTodoInput] = useState('');

    const addTodo = async () => {
        try {

            if (todoInput.length === 0) return;

            const todo = {
                title: todoInput,
                completed: false
            }

            dispatch({ type: "ADD_TODO", todo: todo });

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/todo`, todo, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setTodoInput('')
            toast.success('Todo added successfully!')

        } catch (error) {
            toast.error('Unable to add todo!')
        }
    }

    const updateTodo = async (id, title) => {
        try {

            dispatch({ type: "UPDATE_TODO", todoId: id, updatedData: { title } });

            const response = await axios.put(`${import.meta.env.VITE_API_URL}/todo/${id}`, {
                title
            }, {
                withCredentials: true
            });
        } catch (error) {
            toast.error('Unable to update todo!');
        }
    }

    const updateTodoStatus = async (id, completed) => {
        try {
            dispatch({ type: "UPDATE_TODO_STATUS", todoId: id, updatedData: { completed: completed } });

            const response = await axios.put(`${import.meta.env.VITE_API_URL}/todo/status/${id}`, { completed: completed }, {
                withCredentials: true
            })
        } catch (error) {
            console.error(error);
            toast.error('Unable to update todo status!');
        }
    }

    const deleteTodo = async (id) => {
        try {
            dispatch({ type: "DELETE_TODO", todoId: id });

            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/todo/${id}`, {
                withCredentials: true
            })
        } catch (error) {
            toast.error('Unable to delete todo!');
        }
    }

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/todo`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.data.success) {
                    dispatch({ type: "SET_TODOS", todos: response.data.todos });
                } else {
                    toast.error('Unable to fetch todos!');
                }

            }
            catch (error) {
                console.error(error);
            }
        }

        getTodos();
    }, []);

    const values = {
        addTodo,
        Todos,
        todoInput, setTodoInput,
        deleteTodo, updateTodo, updateTodoStatus
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    return useContext(AppContext);
};
