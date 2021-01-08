import React, {useEffect} from "react";

import spinner from "../../img/spinner.jpg";


import {useSelector, useDispatch} from "react-redux";
import {fetchMovies} from '../../redux/movies/movies.actions'


const fetchMovieDataHOC = WrappedComponents => {
  const WithData = ({url}) => {  

    const {loading, movies, error} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchMovies(url));
    }, []);
    

    return loading ? (
      <img src={spinner} alt="loading" className="spinner" />
    ) : (
      <WrappedComponents items={movies} />
    );
  };

  return WithData;
};

export default fetchMovieDataHOC;
