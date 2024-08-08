import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <h1>
            vauge<span style={{ color: "#3ABEF9" }}>sync</span>
          </h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Our firm</a>
          </li>
          <li>
            <a href="">services</a>
          </li>
          {/* <li><a href="">Integrations</a></li>
                <li><a href="">Resources</a></li> */}
        </ul>
      </div>
      <div className="buttons">
        <Link
          to={"/book-a-demo"}
          style={{ fontWeight: "500", backgroundColor: "#A7E6FF" }}
          href=""
        >
          Book Demo
        </Link>
        <Link
          to={"/login"}
          style={{ fontWeight: "500", backgroundColor: "#A7E6FF" }}
          href=""
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
