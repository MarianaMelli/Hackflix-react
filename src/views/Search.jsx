import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import useInput from "../hooks/useInput";

function Search() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchInput = useInput("");

  useEffect(() => {
    const getMovieByTitle = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          include_adult: "false",
          include_video: "false",
          query: searchInput.value,
          language: "en-US",
          
        },
      });
      setFilteredMovies(response.data.results);
      
    };
    getMovieByTitle();
  }, [searchInput.value]);

  return (
    <>
      <div className="search">
        <h1 className="search-title">Explore movies by title...</h1>
        <form action="" className="search-form">
          
          <input
            type="text"
            name="title"
            id="title"
            className=" search-input rounded-pill"
            placeholder="input your title.."
            {...searchInput}
          />
        </form>
        {filteredMovies.length === 0  && searchInput.value !== "" ? (
        <div className="movie-not-found text-center" role="alert">
          Sorry, we couldn't find any results for <strong className="searched-value">{searchInput.value}</strong>. Please check the spelling or try another title.
        </div>
      ) : (
        <div className="searched-movies">
          {filteredMovies.length !== 0 && <h2>Results...</h2>}
          <div className="row">
            {filteredMovies.map((filteredMovie) => (
              <Movie movie={filteredMovie} key={filteredMovie.id} />
            ))}
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}

export default Search;
