import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { useNavigate, NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Movies from "../components/Movies";

import axios from "axios";

import NavBar from "../components/Navbar";

import MyPagination from "../components/MyPagination";

function Home() {
  const [rating, setRating] = useState(5);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
    const getMovies = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          page: page,
          "vote_average.gte": rating * 2 - 2,
          "vote_average.lte": rating * 2,
        },
      });
      setMovieList([...response.data.results]);
    };
    getMovies();
  }, [rating]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          api_key: "a9b83a29b5ec4406cd640b51947d2d89",
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          page: page,
          "vote_average.gte": rating * 2 - 2,
          "vote_average.lte": rating * 2,
        },
      });
      setMovieList([...response.data.results]);
    };
    getMovies();
  }, [page]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    setShowButton(!isTop);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };
    window.onscroll = scrollHandler;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <Banner />
      <div className="movies-container text-center">
        <div className="rating">
          <span className="rating-header">Filter by rating</span>
          <Rating onClick={handleRating} initialValue={rating} />
        </div>

        <Movies
          rating={rating}
          movieList={movieList}
          setMovieList={setMovieList}
        />

        <MyPagination page={page} setPage={setPage} />
      </div>
      { showButton && <button className="back-to-top" onClick={scrollToTop}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>}
    </>
  );
}

export default Home;
