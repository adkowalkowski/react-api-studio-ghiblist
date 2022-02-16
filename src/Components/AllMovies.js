import React, { useState, useEffect } from "react";
import SingleMovie from "./SingleMovie";
import $ from 'jquery'; 


function AllMovies({ handleWatchList }) {
  const [allMovies, setAllMovies] = useState([]);
  const [pickMovie, setPickMovie] = useState(
    "2baf70d1-42bb-4437-b551-e5fed5a87abe"
  );
  const url = "https://ghibliapi.herokuapp.com/films";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      });
  }, []);

  const handleMovieClick = (id) => {
    setPickMovie(id);
  };

  let moviesArr = allMovies.map((item, index) => {
    return (
      <div key={index}>
        <img className="each-movie"
          onClick={() => {
            handleMovieClick(item.id);
            if ($(window).width() < 1024) {
                window.scrollTo({top: 125, behavior: 'smooth'})
            } 
          }}
          src={item.image}
          alt={item.title}
        ></img>
      </div>
    );
  });

  return (
    <div className="all-movies">
      <p className="home-description">
        Below are all the feature films from Studio Ghibli. Click on a movie
         for more information and to add the movie to your watch
        list.
      </p>
      <SingleMovie className="test" handleWatchList={handleWatchList} id={pickMovie} />
      {moviesArr}
    </div>
  );
}

export default AllMovies;
