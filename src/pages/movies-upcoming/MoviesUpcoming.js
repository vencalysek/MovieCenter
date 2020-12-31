import React from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import fetchMovieDataHOC from "../../components/HOC/fetchMovieDataHOC";

const MoviesUpcoming = ({items}) => {
  return (
    <div className="movie-section now-playing">
      <div className="main-section__heading">Upcoming</div>
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

export default fetchMovieDataHOC(MoviesUpcoming);
