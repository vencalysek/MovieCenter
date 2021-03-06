import React from "react";
import {Link} from "react-router-dom";
import imageNotLoad from "../../img/img_404.jpg";
import "./movieCard.styles.scss";

const MovieCard = ({item}) => {
  const {id, poster_path} = item
  return (
    <div className="col-md-6 col-lg-4 col-xl-2">
      <div className="flip-card">
        <div className="card bg-transparent">
          <div className="card__front">
            <img
              className="card-img-top"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : imageNotLoad
              }
              alt=""
            />
          </div>
          <div className="card__back">
            <img
              className="card-img-top"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : imageNotLoad
              }
              alt=""
            />
            <Link to={`/movie/${id}`}>
              <button className="card-btn" onClick={() => id}>
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
