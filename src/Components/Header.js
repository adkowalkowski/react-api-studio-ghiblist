import About from "./About";
import AllMovies from "./AllMovies";
import Feedback from "./Feedback";
import WatchList from "./WatchList";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import '../index.css';

function Header() {
  const [watchList, setWatchList] = useState([]);

  const handleWatchList = (image) => {
    const addToWatchList = [...watchList];
    addToWatchList.push({ image });
    setWatchList(addToWatchList);
  };

  const removeMovie = (object) => {
    const updatedWatchList = [...watchList];
    let filteredMovieList = updatedWatchList.filter((item) => item !== object);
    setWatchList(filteredMovieList);
  };

  return (
    <div className="header">
      <nav className="navbar fixed-top navbar-dark bg-dark navbar-custom">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Studio Ghiblist
          </Link>
          <Link
            to="/watchlist"
            style={{ textDecoration: "none", color: "white" }}
          >
            Watch List
          </Link>
          <Link
                to="/feedback"
                style={{ textDecoration: "none", color: "white" }}
              >
                Feedback
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About the Creator
              </Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={<AllMovies handleWatchList={handleWatchList} />}
          />
          <Route
            path="/watchlist"
            element={
              <WatchList watchList={watchList} removeMovie={removeMovie} />
            }
          />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default Header;
