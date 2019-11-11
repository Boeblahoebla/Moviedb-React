// Imports
//////////

// Dependencies
import React from 'react';


// Component
////////////

export const MovieDetailModal = ({movie}) => {
    return (
        <div className="modal fade client-detail" id="movieDetailModal" tabIndex="-1"
             role="dialog" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    {/* Modal header */}
                    <div className="modal-header">
                        <span className="modal-title" id="movieDetailModalLabel">
                            Movie detail
                        </span>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="modal-body client-detail-content">
                        <div>
                            <h2>{movie.title}</h2>
                        </div>
                    </div>

                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button
                            data-dismiss="modal" aria-label="Close"
                            className="btn btn-info btn-block">
                                Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};