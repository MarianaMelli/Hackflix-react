import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      
      <div className="error-msg" >
        <p>Sorry, we couldn't find the page you were looking for. To return to the <strong className="hackflix-error">Hackflix</strong> homepgae click on the button below.</p>
        <img className="error-img" src="../error404-img.avif" alt="error 404 image" />
      </div>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
}

export default Error404;
