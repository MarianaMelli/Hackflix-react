import Movie from "./Movie";



function Movies({rating, movieList, setMovieList }) { 
  return (
    movieList.length > 0 && (
      <ul className="row movie-list">
        {movieList
          .filter((movie) => movie.vote_average >= rating * 2 - 2 && movie.vote_average <= rating * 2)
          .map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
      </ul>
    )
  );
}

export default Movies;
