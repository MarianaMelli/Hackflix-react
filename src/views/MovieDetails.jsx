import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import React from "react";
import YouTube from "react-youtube";
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${params.id}`,
          params: {
            api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          },
        });
        setMovie(response.data);
      } catch (error) {
        setIsError({ code: error.code });
      }
    };
    getMovie();
  }, []);

  useEffect(() => {
    const getTrailer = async () => {
      const response = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${params.id}/videos`,
        headers: { accept: "application/json" },
        params: {
          api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          language: "en-US",
        },
      });
      const trailer = response.data.results.find(
        (video) => video.name === "Official Trailer [Subtitled]"
      );
      setTrailer(trailer || response.data.results[0]);
    };
    getTrailer();
  }, []); //https://www.youtube.com/watch?v=  aca va la key

  if (isError) {
    return "No se encontro esa película";
  } else {
    return movie ? (
      <>
        <div
          className="movie-detail"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="movie-detail-content">
            <h1 className="movie-detail-title">{movie.title}</h1>
            <h3 className="movie-detail-date">
              <span className="movie-detail-highlight-text">
                Release Date :
              </span>{" "}
              {format(new Date(movie.release_date), "dd MMM yyyy")}
            </h3>
            <p className="movie-detail-overview">
              <span className="movie-detail-highlight-text">Overview :</span>{" "}
              {movie.overview}
            </p>
            <h3 className="movie-detail-rating">
              <span className="movie-detail-highlight-text">Rating:</span>{" "}
              {Math.floor(movie.vote_average)}
            </h3>
            <button
              className="play-trailer-btn"
              onClick={() => setPlaying(true)}
            >
              Play Trailer
            </button>
          </div>

          {playing && (
            <div className="trailer-container">
              <YouTube
                videoId={trailer.key}
                className="trailer"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
              <button
                className="close-trailer-btn"
                onClick={() => setPlaying(false)}
              >
                Close trailer
              </button>
            </div>
          )}
          <button
            className="mobile-back-home-btn "
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="back-home-btn" onClick={() => navigate("/")}>
            Back to home
          </button>
        </div>
      </>
    ) : (
      <div className="text-center mt-5">
        <div className="spinner-border text-secondary mt-5" role="status"></div>
        <h4>Loading...</h4>
      </div>
    );
  }
}

export default MovieDetails;
