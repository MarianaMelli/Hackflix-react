import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="contact-info">
        <img
          className="profile-img"
          src="../public/profile.png"
          alt="profile image"
        />
        <h1>Contact me!</h1>
        <p>Hello! my name is Mariana Melli. I am a Full Stack Developer.</p>
        <p>
          I have experience working with technologies such as JavaScript ES6+,
          React.js, Node.js, Express.js, MySQL, and MongoDB.
        </p>

        <span className="socials">
          {" "}
          <a href="https://www.linkedin.com/in/mariana-melli/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>{" "}
          <a href="https://github.com/MarianaMelli" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="../public/cv.pdf" target="_blank">
            {" "}
            <i className="fa-regular fa-file-pdf"></i>
          </a>
          <a href="mailto:mmelli.dev@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </span>
      </div>
      <button className="mobile-back-home-btn " onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="back-home-btn " onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
}

export default Contact;
