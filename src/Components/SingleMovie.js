import React, { useState, useEffect } from 'react';
import "../index.css";

function SingleMovie(props) {
    const text = "Add to watchlist"
    const [buttonText, setButtonText] = useState(text);

    useEffect(() => {
      const timer = setTimeout(() => {
        setButtonText(text);
      }, 2000);
      return () => clearTimeout(timer);
    }, [buttonText])

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
        <button type="button" className="btn btn-primary" onClick={() => {setButtonText("Added"); props.handleWatchList(singleMovie.image)}} >
          {buttonText}
        </button>
        </div>
      </div>
    );
  }
  return <div className={props.className}>{singleMovieCard}</div>

}

export default SingleMovie; 