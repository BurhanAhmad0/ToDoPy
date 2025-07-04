import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { useAuth } from "./AuthContext.jsx";
import { toast } from "react-hot-toast";
import { TodoReducer } from "../reducers/TodoReducer.jsx";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = [];

  const { user } = useAuth();

  const [LoadingAddRequest, setLoadingAddRequest] = useState(false);
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const limit = 8; // Items per page
  const [Todos, dispatch] = useReducer(TodoReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = async () => {
    setLoadingAddRequest(true);
    try {
      if (todoInput.length === 0) return;

      const todo = {
        title: todoInput,
        completed: false,
      };

      dispatch({ type: "ADD_TODO", todo: todo });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/todo`,
        todo,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTodoInput("");
      toast.success("Todo added successfully!");
      setLoadingAddRequest(false);
    } catch (error) {
      setLoadingAddRequest(false);
    }
  };

  const updateTodo = async (id, title) => {
    try {
      dispatch({ type: "UPDATE_TODO", todoId: id, updatedData: { title } });

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/todo/${id}`,
        {
          title,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error("Unable to update todo!");
    }
  };

  const updateTodoStatus = async (id, completed) => {
    try {
      dispatch({
        type: "UPDATE_TODO_STATUS",
        todoId: id,
        updatedData: { completed: completed },
      });

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/todo/status/${id}`,
        { completed: completed },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(error);
      toast.error("Unable to update todo status!");
    }
  };

  const deleteTodo = async (id) => {
    try {
      dispatch({ type: "DELETE_TODO", todoId: id });

      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/todo/${id}`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error("Unable to delete todo!");
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/todo?page=${page}&limit=${limit}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setTotalPages(response.data.totalPages);
          dispatch({ type: "SET_TODOS", todos: response.data.todos });
        } else {
          setLoading(false);
          toast.error("Unable to fetch todos!");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getTodos();
  }, [user, page]);

  const values = {
    addTodo,
    Todos,
    loading,
    todoInput,
    setTodoInput,
    deleteTodo,
    updateTodo,
    updateTodoStatus,
    setPage,
    page,
    totalPages,
    LoadingAddRequest,
    setLoadingAddRequest,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  return useContext(AppContext);
};
