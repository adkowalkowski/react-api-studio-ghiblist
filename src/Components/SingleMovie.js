import React, { useState, useEffect } from 'react';
import "../index.css";
import Example from "./Example";

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
        <div className="writing">
        <h5>{singleMovie.original_title}</h5>
        <h5>{singleMovie.title} </h5>
        <p>Released: {singleMovie.release_date}</p>
        <p>Running time: {singleMovie.running_time} minutes</p>
        <p>Description: {singleMovie.description} </p>
        {/* <button type="button" className="btn btn-primary" onClick={() => props.handleWatchList(singleMovie.image)}>Add to watchlist</button> */}
        <Example />
        </div>
      </div>
    );
  }
  return <div className={props.className}>{singleMovieCard}</div>

}

export default SingleMovie; 




    //attempting boostrap card
/* <img src={singleMovie.image} className="card-img-top" alt="..."></img>
<div className="card-body">
<h5 className="card-title">{singleMovie.original_title}</h5>
  <h5 className="card-title">{singleMovie.title}</h5>
  <p className="card-text">Released: {singleMovie.release_date}</p>
  <p className="card-text">Running time: {singleMovie.running_time} minutes</p>
  <p className="card-text">Description: {singleMovie.description} </p>
  <button className="card-button" onClick={() => props.handleWatchList(singleMovie.image)}>Add to watchlist</button>
</div> */