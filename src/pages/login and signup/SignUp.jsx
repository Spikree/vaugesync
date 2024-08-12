import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  }, []);

  const url = import.meta.env.VITE_BACKEND_URL;

  const validatePassword = (password) => {
    const capitalLetterPattern = /[A-Z]/;
    const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
      return "Password should be more than 8 characters";
    }
    if (!capitalLetterPattern.test(password)) {
      return "Password should contain at least one capital letter";
    }
    if (!symbolPattern.test(password)) {
      return "Password should contain at least one symbol";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    setError(validatePassword(password));
  };

  const createAccount = async () => {
    setPassword("");
    setName("");
    setEmail("");

    try {
      const response = await axios.post(url + "/create-account", {
        name: name,
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.accessToken);
        setIsLoggedIn(true);
        navigate("/main");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePasswordShow = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLoginAccount = () => {
    navigate("/login");
  };

  const onLogin = (event) => {
    event.preventDefault();
    createAccount();
  };

  return (
    <div className="login">
      <ToastContainer />
      <form onSubmit={(e) => onLogin(e)}>
        <div className="login-head">
          <h1>
            Signup to vauge
            <span style={{ color: "rgb(58, 190, 249)" }}>sync</span>
          </h1>
          <p>signup to access more resources</p>
        </div>

        <div className="name-div">
          <label>Name : </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            required
            placeholder="please enter your name"
          />
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
              onChange={(e) => handlePasswordChange(e)}
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
          <p style={{ color: "#3498db" }}>forgot password?</p>
        </div>
        <div>
          <p style={{ color: "red", textWrap: "wrap", width: "400px" }}>
            {error}
          </p>
        </div>

        <button type="submit">Sign up</button>

        <div className="sign-up-link">
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span onClick={handleLoginAccount} style={{ color: "#0077ED" }}>
              login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
