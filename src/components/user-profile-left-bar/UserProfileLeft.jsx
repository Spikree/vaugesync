import { StoreContext } from "../../context/StoreContext";
import { getInitials } from "../../helper/getInitials";
import "./UserProfileLeft.css";
import React, { useContext } from "react";

const UserProfileLeft = () => {
  const { user } = useContext(StoreContext);

  return (
    <div className="user-profile-left-bar">
      <div className="profile-pic">
        <h1>{getInitials(user.name)}</h1>
      </div>

      <div className="name">{user.name}</div>

      <div className="user-profile-options">
        <ul>
          <li>account security</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileLeft;
