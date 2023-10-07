import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

export const ProtectedRoute = ({ element }) => {
  const { isUserLogedIn } = useContext(UserContext);

  return isUserLogedIn ? <>{element}</> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element }) => {
  const { isUserLogedIn } = useContext(UserContext);

  return isUserLogedIn ? <Navigate to="/home" /> : <>{element}</>;
};
