import { useState } from "react";
import "./Login.css";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordShow = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  const onLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={(e) => onLogin(e)}>
        <div className="login-head">
          <h1>
            Login to vauge
            <span style={{ color: "rgb(58, 190, 249)" }}>sync</span>
          </h1>
          <p>login to access more resources</p>
        </div>

        <div className="email-div">
          <label>Email : </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="please enter your email"
          />
        </div>

        <div className="password-div">
          <label>password</label>
          <div className="password-input">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={isShowPassword ? "text" : "password"}
              required
              placeholder="please eneter your password"
            />
            {isShowPassword ? (
              <AiFillEyeInvisible
                className="eye-icon"
                onClick={handlePasswordShow}
              />
            ) : (
              <FaEye className="eye-icon" onClick={handlePasswordShow} />
            )}
          </div>
        </div>

        <button type="submit">Login</button>

        <div className="sign-up-link">
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <span onClick={handleCreateAccount} style={{ color: "#0077ED" }}>
              create an account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
