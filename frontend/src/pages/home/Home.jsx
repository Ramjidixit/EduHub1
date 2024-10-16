import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to the world of Learning</h1>
          <p>Where the mind is without fear and the head is held high</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Let's Start
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
