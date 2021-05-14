import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css'


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //  A snippet of code which runs based on a specific condition
    // Any data we are using in the useEffect which is coming 
    //  from outside the scope needs to be added in the useEffects second
    //  parameter. As these data is dependent and it will re-run the function.
    useEffect(() => {
        //  if [] second parameter, run once when the row loades, and never run again

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl])


    // console.log(movies);



    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>


            {/* Container -> Tiles */}
            <div className="tiles_container">
                {/* for every tile */}

                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className={`tile_poster ${isLargeRow && "tile_poster_large"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>


        </div>
    )
}

export default Row