import React, { useState, useEffect } from 'react';
import SingleMovie from './SingleMovie';

function AllMovies() {
    const [allMovies, setAllMovies] = useState([]);
    const [pickMovie, setPickMovie] = useState('')
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
    }

    let moviesArr = allMovies.map((item, index) => {
        return (
            <div className="eachMovie" key={index}>
                <img onClick={() => {handleMovieClick(item.id)}} src={item.image} alt={item.title} ></img>
            </div>
        )
    })

    return <div>
        <SingleMovie id={pickMovie}/>
        {moviesArr}
        </div>

    
}

export default AllMovies;