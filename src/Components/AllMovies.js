import React, { useState, useEffect } from 'react';
import SingleMovie from './SingleMovie';
import Header from './Header';

function AllMovies({handleWatchList}) {
    const [allMovies, setAllMovies] = useState([]);
    const [pickMovie, setPickMovie] = useState('2baf70d1-42bb-4437-b551-e5fed5a87abe')
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
        <SingleMovie handleWatchList={handleWatchList} id={pickMovie}/>
        {moviesArr}
        </div>

    
}

export default AllMovies;