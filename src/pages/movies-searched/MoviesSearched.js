import React, {useEffect} from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import {useParams} from "react-router-dom";

import {API_KEY, API_URL} from "../../ApiConfig";

import {useSelector, useDispatch} from "react-redux";
import {fetchMovies} from "../../redux/movies/movies.actions";

const MoviesSearched = () => {

  const {searchQuery} = useParams();
  const {movies} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const url=`${API_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`

  useEffect(() => {
    dispatch(fetchMovies(url));
  }, [searchQuery]);

  return (
    <div className="movie-section movie-search">
      <div className="main-section__heading">You are looking for: "{searchQuery}"</div>
      <div className="container-fliud main-section__wrap">
        <div className="row">
          {movies.map(movie => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesSearched;
