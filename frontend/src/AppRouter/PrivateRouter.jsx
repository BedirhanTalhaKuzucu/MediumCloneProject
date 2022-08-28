import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../contexts/AppContext";

const PrivateRouter = () => {
  const { userInfo } = useAppState();

  return userInfo ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
