import { Route, Routes } from "react-router-dom";
import UserProfileLeft from "../../components/user-profile-left-bar/UserProfileLeft";
import "./UserProfile.css";
import App from "../../App";
import AccountSecurity from "../../components/Account-security/AccountSecurity";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
        <div className="user-profile-page-inner">
            <div className="user-profile-page-inner-left">
                <UserProfileLeft/>
            </div>

            <div className="user-profile-page-inner-right">
                <AccountSecurity/>
            </div>
        </div>
    </div>
  )
}

export default UserProfile