import { useNavigate } from "react-router-dom";
function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <h1>About Hackflix</h1>
      <div className="about-description">
        <p>
          This project was developed as part of Hack Academy's Coding Bootcamp,
          an intensive program that covers +600 hours of coding in 3 months.
        </p>
        <br />
        <p>
          This web application allows users to stream movies and access detailed
          information about them.
        </p>
        <p>
          It was designed as a single page application, using React to layout
          the site and querying with AJAX calls to The Movie Database TMDB's
          API.
        </p>
      </div>
      <button className="mobile-back-home-btn " onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
}

export default AboutUs;
