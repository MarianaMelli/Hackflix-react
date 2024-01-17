import {useNavigate} from "react-router-dom";
function Movie({ movie }) {
  const navigate = useNavigate();

  return (
    <>
      <li className="col-md-3 col-sm-6 col-xs-12 movie-card" onClick={()=> navigate(`/movie/${movie.id}`)}>
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        ):<div className="defaultImg"> Poster not found </div>}
        
      </li>
      
      
    </>
  );
}

export default Movie;
