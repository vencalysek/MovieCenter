import React from "react";
import poster from "../img/poster.jpg";

const MovieCard = ({item}) => {
    return (        
        <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="flip-card">
                <div className="card bg-transparent">
                    <div className="card-front">
                        <img
                            className="card-img-top"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt=""
                        />
                        <h3 className="card-title">{item.title}<span>({item.release_date.split('-').slice(0,1)})</span> </h3>
                    </div>
                    <div className="card-back">
                        
                        <img
                            className="card-img-top"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt=""
                        />
                        <button className="card-btn">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
