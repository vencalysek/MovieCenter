import React from "react";
import { Link } from "react-router-dom";
import poster from "../img/poster.jpg";

const clg = (id) => {
    console.log(id)
}

const MovieCard = ({item}) => {
    return (        
        <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="flip-card">
                <div className="card bg-transparent">
                    <div className="card__front">
                        <img
                            className="card-img-top"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt=""
                        />
                        {/* <h3 className="card-title">{item.title}<span>({item.release_date.split('-').slice(0,1)})</span> </h3> */}
                    </div>
                    <div className="card__back">
                        
                        <img
                            className="card-img-top"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt=""
                        />
                        <Link to={`/movie/${item.id}`}>
                            <button className="card-btn" onClick={() => clg(item.id)} >See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
