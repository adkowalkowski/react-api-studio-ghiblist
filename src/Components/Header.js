import About from "./About";
import AllMovies from "./AllMovies";
import Feedback from "./Feedback";
import WatchList from "./WatchList";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from 'react';



function Header() {

 const [watchList, setWatchList] = useState([]);

 const handleWatchList = (image) => {
     const addToWatchList = [...watchList]
     addToWatchList.push({image});
     setWatchList(addToWatchList);
     }

  const removeMovie = (object) => {
      const updatedWatchList = [...watchList]
      let filteredMovieList = updatedWatchList.filter((item) => item !== object);
      setWatchList(filteredMovieList);
  } 


  return (
    <div className="header">
      <nav>
        <Link to="/">
          <h1>Studio Ghiblist</h1>
        </Link>
        <Link to="/watchlist">Watch List</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/about">About the Creator</Link>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={<AllMovies handleWatchList={handleWatchList}/>}
          />
          <Route
            path="/watchlist"
            element={
              <WatchList watchList={watchList} removeMovie={removeMovie}/>
            }
          />
          <Route
            path="/feedback"
            element={
              <Feedback />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Header;
