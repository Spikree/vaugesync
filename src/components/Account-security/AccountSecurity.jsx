import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./AccountSecurity.css";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AccountSecurity = () => {
  const { user } = useContext(StoreContext);
  const url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypedNewPassword, setRetypedNewPassword] = useState("");
  const [error, setError] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, SetShowNewPassword] = useState(false);
  const [showRetypedPassword, setShowRetypedPassword] = useState(false);

  const handleShowPassword = (e) => {
    const passwordType = e.target.getAttribute("data-password");

    if (passwordType === "cur-password") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (passwordType === "new-password") {
      SetShowNewPassword(!showNewPassword);
    } else if (passwordType === "retyped-password") {
      setShowRetypedPassword(!showRetypedPassword);
    }
  };

  const validatePassword = (newPass, retypedPass) => {
    const capitalLetterPattern = /[A-Z]/;
    const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (newPass.length < 8) {
      return "Password should be more than 8 characters";
    }
    if (!capitalLetterPattern.test(newPass)) {
      return "Password should contain at least one capital letter";
    }
    if (!symbolPattern.test(newPass)) {
      return "Password should contain at least one symbol";
    }
    if (retypedPass && newPass !== retypedPass) {
      return "Retyped password must be the same as the new password";
    }
    return "";
  };

  const onChangeNewPass = (e) => {
    const newPass = e.target.value;
    setNewPassword(newPass);
    setError(validatePassword(newPass, retypedNewPassword));
  };

  const onChangeRetypedPass = (e) => {
    const retypedPass = e.target.value;
    setRetypedNewPassword(retypedPass);
    setError(validatePassword(newPassword, retypedPass));
  };

  const changePassword = async (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    try {
      const response = await axios.patch(
        url + "/change-password",
        {
          existingPassword: oldPassword,
          newPassword: newPassword,
          reTypedNewPassword: retypedNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setOldPassword("");
      setNewPassword("");
      setRetypedNewPassword("");

      toast.success(response.data.message);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="account-security">
      <ToastContainer />
      <div className="header">
        <h2>Account</h2>
        <p style={{ fontSize: "16px", color: "gray" }}>
          Edit your account settings and change your password here
        </p>
      </div>

      <div className="email">
        <h4>Email:</h4>
        <div>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="change-password">
        <h2>Password</h2>
        <form onSubmit={changePassword}>
          <div className="current-password">
            <input
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="current password"
              type={showCurrentPassword ? "text" : "password"}
            />
            {showCurrentPassword ? (
              <FaEyeSlash
                className="icon"
                data-password="cur-password"
                onClick={(e) => handleShowPassword(e)}
              />
            ) : (
              <FaEye
                className="icon"
                data-password="cur-password"
                onClick={(e) => handleShowPassword(e)}
              />
            )}
          </div>
          <div className="new-password">
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              placeholder="Enter new password"
              type={showNewPassword ? "text" : "password"}
            />
            {showNewPassword ? (
              <FaEyeSlash
                className="icon"
                data-password="new-password"
                onClick={(e) => handleShowPassword(e)}
              />
            ) : (
              <FaEye
                className="icon"
                data-password="new-password"
                onClick={(e) => handleShowPassword(e)}
              />
            )}
          </div>
          <div className="retype-new-password">
            <input
              value={retypedNewPassword}
              onChange={onChangeRetypedPass}
              placeholder="Re-type new password"
              type={showRetypedPassword ? "text" : "password"}
            />
            {showRetypedPassword ? (
              <FaEyeSlash
                className="icon"
                data-password="retyped-password"
                onClick={(e) => handleShowPassword(e)}
              />
            ) : (
              <FaEye
                className="icon"
                data-password="retyped-password"
                onClick={(e) => handleShowPassword(e)}
              />
            )}
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button disabled={!!error}>Change password</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSecurity;
