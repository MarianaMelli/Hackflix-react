import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    const getTopMovie = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: {
          api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          page: 1,
        },
      });
      setTopMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    getTopMovie();
  }, []);
  

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${topMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
        
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">
          {topMovie?.title || topMovie?.name || topMovie?.original_name}
        </h1>        
        <h2 className="banner-description">
          {truncate(topMovie?.overview, 150)}
        </h2>
      </div>

      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
