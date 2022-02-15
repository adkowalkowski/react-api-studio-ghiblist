import About from "./About";
import AllMovies from "./AllMovies";
import Feedback from "./Feedback";
import WatchList from "./WatchList";
import { Route, Link, Routes } from "react-router-dom";


const Header = () => {
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
            element={<AllMovies />}
          />
          <Route
            path="/watchlist"
            element={
              <WatchList />
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
