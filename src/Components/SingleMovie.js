import React, { useState, useEffect } from 'react';


function SingleMovie(props) {
    const [singleMovie, setSingleMovie] = useState({});
    const url = "https://ghibliapi.herokuapp.com/films";

    useEffect(() => {

        fetch(`${url}/${props.id}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleMovie(data);
            });
    }, [props.id]);

    let singleMovieCard = "";
    if (singleMovie.id) {
    singleMovieCard = (
      <div>
        <img src={singleMovie.image} />
        <h3>{singleMovie.original_title}</h3>
        <h3>{singleMovie.title} </h3>
        <p>{singleMovie.description} </p>
        <button>Add to watchlist</button>
      </div>
    );
  }
  return <div className="singleMovie">{singleMovieCard}</div>

}

export default SingleMovie; 
