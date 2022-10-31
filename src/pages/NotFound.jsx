import { useNavigate } from "react-router-dom";
import Images from "../assets/Images";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-50" src={Images[404]} alt="" />
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-5">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
