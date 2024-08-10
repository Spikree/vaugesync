import Resutlts from "../../components/results/Results.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import Features from "../../components/features/Features.jsx";
import Hero from "../../components/hero/Hero.jsx";
import "./Home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="home-main">
      <Hero />
      <Carousel />
      {/* <Resutlts/>
      <Features/> */}
    </div>
  );
};

export default Home;
