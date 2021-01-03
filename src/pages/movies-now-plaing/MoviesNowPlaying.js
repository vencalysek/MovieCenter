import React from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import fetchMovieDataHOC from "../../components/HOC/fetchMovieDataHOC";

const MoviesNowPlaying = ({items}) => {
  return (
    <div className="movie-section">
      <div className="main-section__heading">Now Playing</div>
      <div className="container-fliud main-section__wrap">
        <div className="row">
          {items.map(item => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default fetchMovieDataHOC(MoviesNowPlaying);
