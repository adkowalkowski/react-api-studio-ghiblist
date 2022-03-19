import About from "./About";
import AllMovies from "./AllMovies";
import Feedback from "./Feedback";
import WatchList from "./WatchList";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [watchList, setWatchList] = useState([]);

  const handleWatchList = (image) => {
    const addToWatchList = [...watchList];
    addToWatchList.push({ image });
    setWatchList(addToWatchList);
    console.log(watchList)
  };

  const removeMovie = (object) => {
    const updatedWatchList = [...watchList];
    let filteredMovieList = updatedWatchList.filter((item) => item !== object);
    setWatchList(filteredMovieList);
  };

  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Studio Ghiblist
          </Link>
          <Link
            to="/watchlist"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              window.scrollTo({top: 0})
            }
          }
          >
            Watch List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/feedback"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  window.scrollTo({top: 0})
                }
              }
              >
                Feedback
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  window.scrollTo({top: 0})
                }
              }
              >
                About the Creator
              </Link>
            </div>
          </div>
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
