import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearToken } from "@/redux/features/token-slice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    return navigate("/");
  };

  return (
    <div className="min-h-96 container">
      <h2>Profile</h2>
      <button
        onClick={() => handleLogout()}
        className=" py-2 px-6 rounded-lg bg-green-500 text-white"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
