import "./Hero.css";
import arnav from "../../assets/arnav.jpg";
import anvay from "../../assets/anvay.jpg";
import { useState } from "react";

const Hero = () => {
  const [heroImage, setHeroImage] = useState(anvay);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-header">
          <h1 style={{ fontSize: "50px", marginBottom: "0px" }}>
            Grow your business on <br />
            <span style={{ color: "#00e785" }}>WhatsApp</span>
          </h1>
          <div className="hero-desc">
            <p>
              Personalize communication and sell more with the WhatsApp Business
              API platform that automates marketing, sales, service and support.
            </p>
          </div>
        </div>
        <div className="hero-buttons">
          <a className="one" href="">
            Free 7 Day Trial
          </a>
          <a className="two" href="">
            or book a Demo Today
          </a>
        </div>
      </div>
      <div
        onMouseEnter={() => setHeroImage(arnav)}
        onMouseLeave={() => setHeroImage(anvay)}
        className="image"
      >
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
