import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signinService, signupService } from "../services";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) return { isAuthenticated: true, token, isLoading: false };
    return { isAuthenticated: false, token: null, isLoading: false };
  });

  const navigate = useNavigate();

  const { isAuthenticated, token, isLoading } = auth;

  const signupHandler = async (userFormData) => {
    try {
      setAuth((prevState) => ({ ...prevState, isLoading: true }));
      const res = await signupService(userFormData);
      const data = await res.data;
      if (data.createdUser) {
        setAuth({
          isAuthenticated: true,
          token: data.encodedToken,
          isLoading: false,
        });
        navigate("/");
        toast.success("Successfully signed up!");
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      setAuth({ isAuthenticated: false, token: null, isLoading: false });
      toast.error("Something went wrong. Try again!");
      console.error(error);
    }
  };

  const signinHandler = async (userFormData) => {
    try {
      setAuth((prevState) => ({ ...prevState, isLoading: true }));
      const res = await signinService(userFormData);
      const data = await res.data;
      if (data.foundUser) {
        setAuth({
          isAuthenticated: true,
          token: data.encodedToken,
          isLoading: false,
        });
        toast.success("Successfully signed in!");
        navigate("/");
        localStorage.setItem("token", data.encodedToken);
      }
    } catch (error) {
      setAuth({ isAuthenticated: false, token: null, isLoading: false });
      console.error(error);
      toast.error("Something went wrong. Try again!");
    }
  };

  const signoutHandler = (e) => {
    e.preventDefault();
    setAuth({ isAuthenticated: false, token: null, isLoading: false });
    localStorage.removeItem("token");
    toast.success("Successfully signed out!");
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        signupHandler,
        signinHandler,
        signoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
