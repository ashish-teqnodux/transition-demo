import { Navigate, useNavigate } from "react-router-dom";
import { getAuth } from "../services/identity.service";
import { useEffect } from "react";

export const AuthRequired = ({ children }) => {
  const navigate = useNavigate();
  // Replace with your authentication logic
  const auth = getAuth();

  useEffect(() => {
    if (!!!auth?.token) {
      // Redirect to the login page if not authenticated
      navigate("/login");
    }
  }, [auth, navigate]);

  return auth?.token ? children : <Navigate to="/login" />;
};
