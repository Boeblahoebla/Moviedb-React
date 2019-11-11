// Imports
//////////

// Base dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import { MovieCard } from './movieCard/MovieCard';
import { Spinner } from '../spinner/Spinner';


// Overview component
/////////////////////

export const Overview = () => {

    // Fetch the apikey & base url for the overview from the environment variables
    const baseUrlOverview = process.env.REACT_APP_BASEURL_OVERVIEW;
    const ApiKey = process.env.REACT_APP_API_KEY;

    // State handling
    const [movies, setMovies] = useState([]);
    const [moviesLoading, setMoviesLoading] = useState(true);

    // When the component mounts fetch the movies from the api
    useEffect(() => {
        axios.get(`${baseUrlOverview}&api_key=${ApiKey}`)
            .then(res => {
                setMoviesLoading(false);
                setMovies(res.data.results);
            })
    },[]);

    // Generate the content, show a spinner of the movies are still loading
    const moviesContent = moviesLoading
        ? <Spinner/>
        : movies.map(movie => {
            const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;
            return <MovieCard key={movie.id} votes={movie.vote_average} overview={movie.overview} poster={posterUrl} relDate={movie.release_date} title={movie.title}/>
        });

    return (
        <div className="row">
            {moviesContent}
        </div>
    );
};