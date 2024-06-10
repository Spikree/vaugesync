import "./Hero.css";
import arnav from "../../assets/arnav.jpg";
import anvay from "../../assets/anvay.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroImage, setHeroImage] = useState(anvay);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.add("show-once");
        } else if (!entry.target.classList.contains("show-once")) {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-header">
          <h1 style={{ fontSize: "50px", marginBottom: "0px" }}>
            Grow your business on <br />
            <span style={{ color: "#3ABEF9" }}>WhatsApp</span>
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
          <Link to="/book-a-demo" className="two">
            or book a Demo Today
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={() => setHeroImage(arnav)}
        onMouseLeave={() => setHeroImage(anvay)}
        className="image hidden"
      >
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
