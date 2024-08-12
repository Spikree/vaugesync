import { useContext, useEffect, useState } from "react";
import "./ProfileInfo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../../helper/getInitials";
import PopUp from "../pop up/PopUp";
import { StoreContext } from "../../context/StoreContext";

const ProfileInfo = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showPopUp, setShowPopUp] = useState(false);

  const [userName, setUserName] = useState("loading");
  const { setUser } = useContext(StoreContext);

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(url + "/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // console.log(response.data.user);
        setUser(response.data.user);

        const userName = response.data.user.name;

        setUserName(userName);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [token]);

  return (
    <div className="profile-info">
      <div className="user-info">
        <p style={{ marginBottom: "2px", cursor: "pointer" }}>{userName}</p>
      </div>
      <PopUp showPopUp={showPopUp} onLogout={onLogout} />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowPopUp(!showPopUp)}
        className="user-profile"
      >
        {getInitials(userName)}
      </div>
    </div>
  );
};

export default ProfileInfo;
