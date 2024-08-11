import { Link } from "react-router-dom";
import "./PopUp.css";

const PopUp = ({ showPopUp, onLogout }) => {
  return showPopUp ? (
    <div className="pop-up">
      <ul>
        <Link to={"/user-profile"}>
          <li>Profile</li>
        </Link>
        <li onClick={onLogout}>log out</li>
      </ul>
    </div>
  ) : null;
};

export default PopUp;
