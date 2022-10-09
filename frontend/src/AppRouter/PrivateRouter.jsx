import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppState } from "../contexts/AppContext";
import { useAuthStates } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { userInfo, setActivate } = useAuthStates();
  const location = useLocation();

  if (userInfo === undefined) return null;

  return userInfo || setActivate ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRouter;
