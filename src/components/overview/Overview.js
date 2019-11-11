// Imports
//////////

// Base dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import { MovieCard } from './movieCard/MovieCard';
import { Spinner } from '../spinner/Spinner';
import { MovieDetailModal } from '../movieDetail/MovieDetailModal';
import { Pagination } from '../pagination/Pagination';


// Overview component
/////////////////////

export const Overview = () => {

    // Fetch the apikey & base url for the overview from the environment variables
    const baseUrlOverview = process.env.REACT_APP_BASEURL_OVERVIEW;
    const ApiKey = process.env.REACT_APP_API_KEY;

    // State handling
    const [moviesLoading, setMoviesLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(null);

    // When the component mounts fetch the movies from the api
    useEffect(() => {
        axios.get(`${baseUrlOverview}&api_key=${ApiKey}&page=${currentPage}`)
            .then(res => {
                setMoviesLoading(false);
                setMovies(res.data.results);
                setPages(res.data.total_pages)
            })
    },[ currentPage, ApiKey, baseUrlOverview ]);

    // Handler to change the movie in the modal
    const changeMovie = (movie) => { setMovie(movie) };

    // Decrement page handler
    const decrementPage = () => { currentPage > 1 && setCurrentPage(currentPage - 1) };

    // Increment page handler
    const incrementPage = () => { currentPage < pages && setCurrentPage(currentPage + 1) };

    // Set first page handler
    const setPageBegin = () => { setCurrentPage(1) };

    // Set last page handler
    const setPageEnd = () => { setCurrentPage(pages) };

    // Set page number handler
    const selectPage = (value) => {
        (Math.abs(value) <= pages)
            ? setCurrentPage(Math.abs(value))
            : setCurrentPage(pages)
    };

    // Generate the content, show a spinner of the movies are still loading
    const moviesContent = moviesLoading
        ? <Spinner/>
        : movies.map(movie => {
            const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;
            return <MovieCard key={movie.id} votes={movie.vote_average} overview={movie.overview} poster={posterUrl} relDate={movie.release_date} title={movie.title} movie={movie} changeMovie={changeMovie}/>
        });

    return (
        <div>
            <Pagination pages={pages} currentPage={currentPage} decrementPage={decrementPage} incrementPage={incrementPage}
                        setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}/>

            <div className="row">
                {moviesContent}
                <MovieDetailModal movie={movie}/>
            </div>

            <Pagination pages={pages} currentPage={currentPage} decrementPage={decrementPage} incrementPage={incrementPage}
                        setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}/>
        </div>

    );
};