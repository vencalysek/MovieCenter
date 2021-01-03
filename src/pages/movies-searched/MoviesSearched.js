import React from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import fetchMovieDataHOC from "../../components/HOC/fetchMovieDataHOC";
import {useParams} from "react-router-dom";


const MoviesSearched = ({getSavedQuery, items}) => {

  const {searchQuery} = useParams();
  // getSavedQuery(searchQuery)

  return (
    <div className="movie-section movie-search">
      <div className="main-section__heading">You are looking for: "{searchQuery}"</div>
      <div className="container-fliud main-section__wrap">
        <div className="row">
          {items.map(item => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default fetchMovieDataHOC(MoviesSearched)
