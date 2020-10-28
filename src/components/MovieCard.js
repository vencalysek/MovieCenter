import React from "react";
import poster from '../img/poster.jpg'

const MovieCard = () => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="card bg-transparent">
                <img src={poster} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">Warcraft <span>(2016)</span> </h3>
                    <p className="card-text">
                        Action / Adventure

                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
