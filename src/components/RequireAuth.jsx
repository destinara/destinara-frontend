import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const token = localStorage.getItem("token");
  return token != null;
};

export const RequireAuth = () => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
