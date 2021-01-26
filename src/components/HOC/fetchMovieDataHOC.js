import React, {useEffect, useState} from "react";

import spinner from "../../img/spinner.jpg";

import {useSelector, useDispatch} from "react-redux";
import {fetchMovies, fetchMoreMovies} from "../../redux/movies/movies.actions";

const fetchMovieDataHOC = WrappedComponents => {
  const WithData = ({url}) => {
    const [pageNum, setPageNum] = useState(2);
    const {loading, movies, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies(url));
    }, []);

    const loadMore = () => {
      setPageNum(pageNum + 1);
      dispatch(fetchMoreMovies(url, pageNum));
    };

    return loading ? (
      <img src={spinner} alt="loading" className="spinner" />
    ) : (
      <>
        <WrappedComponents items={movies} loadMore={loadMore} />
      </>
    );
  };

  return WithData;
};

export default fetchMovieDataHOC;
