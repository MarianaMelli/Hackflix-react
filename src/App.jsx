import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import NavBar from "./components/Navbar";

import MovieDetails from "./views/MovieDetails";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import RedirectTo from "./components/RedirectTo";
import Search from "./views/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pelicula/:id" element={<RedirectTo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
