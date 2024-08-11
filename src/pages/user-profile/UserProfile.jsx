import UserProfileLeft from "../../components/user-profile-left-bar/UserProfileLeft";
import "./UserProfile.css";
import AccountSecurity from "../../components/Account-security/AccountSecurity";
import { useEffect } from "react";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <div className="user-profile-page-inner">
        <div className="user-profile-page-inner-left">
          <UserProfileLeft />
        </div>

        <div className="user-profile-page-inner-right">
          <AccountSecurity />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
