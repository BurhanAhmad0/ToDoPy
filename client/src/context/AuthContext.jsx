import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/user`,
          {
            withCredentials: true, // Ensure cookies are sent with the request
          }
        );
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setUser(null);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const values = {
    user,
    setUser,
    Loading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
