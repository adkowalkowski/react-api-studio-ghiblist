import React, { useState, useEffect } from 'react';
import "../index.css";

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
      <div className="single-movie">
        <img src={singleMovie.image} />
        <span className="writing">
        <h3>{singleMovie.original_title}</h3>
        <h3>{singleMovie.title} </h3>
        <p>Released: {singleMovie.release_date}</p>
        <p>Running time: {singleMovie.running_time} minutes</p>
        <p>Description: {singleMovie.description} </p>
        <button onClick={() => props.handleWatchList(singleMovie.image)}>Add to watchlist</button>
        </span>
      </div>
    );
  }
  return <div className={props.className}>{singleMovieCard}</div>

}

export default SingleMovie; 




    //attempting boostrap card
/* <img src={singleMovie.image} className="card-img-top" alt="..."></img>
<div className="card-body">
<h3 className="card-title">{singleMovie.original_title}</h3>
  <h3 className="card-title">{singleMovie.title}</h3>
  <p className="card-text">Released: {singleMovie.release_date}</p>
  <p className="card-text">Running time: {singleMovie.running_time} minutes</p>
  <p className="card-text">Description: {singleMovie.description} </p>
  <button className="card-button" onClick={() => props.handleWatchList(singleMovie.image)}>Add to watchlist</button>
</div> */