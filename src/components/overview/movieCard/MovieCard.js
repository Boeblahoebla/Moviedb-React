// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Movie Card component
///////////////////////

export const MovieCard = ({title, overview, poster, relDate, votes}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 m-auto">
                <img src={poster} className="card-img-top" alt={title}/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-body__section mb-4">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{overview.substr(0, 100)}...</p>
                    </div>
                    <div className="card-body__section d-flex flex-column">
                        <div className="card-body__section__info d-flex justify-content-between mb-2">
                            <div className="card-body__section__info--left">
                                <h5 className="text-muted lead">Release date</h5>
                                <p>{relDate}</p>
                            </div>
                            <div className="card-body__section__info--right">
                                <h5 className="text-muted lead">Score</h5>
                                <p className="text-right">{votes}</p>
                            </div>
                        </div>
                        <div className="card-body__section__link">
                            <a href="#" className="btn btn-primary btn-block">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Prop types for the component
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    relDate: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
};