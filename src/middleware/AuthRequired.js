import { Navigate, useNavigate } from "react-router-dom";
import { getAuth } from "../services/identity.service";
import { useEffect } from "react";

export const AuthRequired = ({ children }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!!!auth?.token) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return auth?.token ? children : <Navigate to="/login" />;
};
