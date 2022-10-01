import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../contexts/AppContext";
import { useAuthStates } from "../contexts/AuthContext";


const PrivateRouter = () => {
  const { userInfo } = useAuthStates();

  return userInfo ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
