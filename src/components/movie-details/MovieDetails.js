import React, {useState, useEffect} from "react";
// api
import {API_KEY, API_URL} from "../../ApiConfig";

// router
import {useParams, useHistory} from "react-router-dom";

import spinner from "../../img/spinner.jpg";

import "./movieDetails.styles.scss";
import ScrollCollection from "../scroll-collection/ScrollCollection";

import {useSelector, useDispatch} from "react-redux";
import {fetchMovieDetails} from '../../redux/movie-details/movie-details.action'
import {fetchCasts} from '../../redux/casts/casts.action'


import CommentSection from '../comment-section/CommentSection'
import BtnFavourite from "../btn-favourite/BtnFavourite";


const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {movieId} = useParams();
  const history = useHistory();
  const {movieDetails} = useSelector(state => state.movieDetails);
  const {casts} = useSelector(state => state.casts);

  const dispatch = useDispatch();
  const urlMovieDetails=`${API_URL}/movie/${movieId}?api_key=${API_KEY}`
  const urlCasts = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  
  useEffect(() => {
    dispatch(fetchMovieDetails(urlMovieDetails));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    dispatch(fetchCasts(urlCasts));
  }, []);

  const time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + "h " + minutes + "m";
  };

  const getGenre = () => {
    let showGenres = [];
    for (let i = 0; i < movieDetails.genres.length; i++) {
      showGenres.push(movieDetails.genres[i].name);
    }
    return showGenres.join(", ");
  };

  // ! STYLING
  // image styling
  const styleHeroImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
  };

  // colorst for imge overlay
  const colors = [
    ["rgba(19, 15, 64, 1)", "rgba(19, 15, 64, .7)"],
    ["rgba(58, 24, 26, 1)", "rgba(58, 24, 26, .7)"],
    ["rgba(24, 67, 67, 1)", "rgba(24, 67, 67, .7)"],
    ["rgba(33, 38, 58, 1)", "rgba(33, 38, 58, .7)"],
    ["rgba(46, 24, 59, 1)", "rgba(46, 24, 59, .7)"],
    ["rgba(25, 61, 75, 1)", "rgba(25, 61, 75, .7)"],
    ["rgba(46, 15, 63, 1)", "rgba(46, 15, 63, .7)"],
    ["rgba(98, 66, 43, 1)", "rgba(98, 66, 43, .7)"],
    ["rgba(70, 61, 32, 1)", "rgba(70, 61, 32, .7)"],
    ["rgba(73, 80, 75, 1)", "rgba(73, 80, 75, .7)"],
  ];
  const colorRand = Math.floor(Math.random() * colors.length);

  const styleHeroOverlay = {
    backgroundImage: `linear-gradient(to right, ${colors[colorRand][0]} 150px,${colors[colorRand][1]} 110%`,
  };

  return isLoading ? (
    // nez se nactou data je pusteny spiner
    <img src={spinner} alt="loading" className="spinner" />
  ) : (
    <div className="movie-details">

      {/* BACK BUTTON */}
      <div className="movie-details__back-wrap" onClick={() => history.goBack()}>
        <i className="material-icons">arrow_back</i>
      </div>

      {/* HERO */}
      <div className="movie-details__hero">
        <div className="movie-details__hero--img" style={styleHeroImage}>
          <div className="movie-details__hero--overlay" style={styleHeroOverlay}>
            <div className="movie-details--wrap">
              {/* poster */}
              <div className="movie-details__poster--wrap">

                <BtnFavourite id={movieId} poster_path={movieDetails.poster_path} />
                
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="" />
              </div>
              {/* info */}
              <div className="movie-details__info--wrap">
                <section className="movie-details__info--content">
                  {/* heading */}
                  <div className="info--content__heading">
                    <h1 className="info--content__heading-title">{movieDetails.title}</h1>
                    <div className="info--content__heading-facts">
                      <span className="info--content__heading-facts-genres">
                        {getGenre()}
                      </span>
                      <i className="material-icons bullet">fiber_manual_record</i>

                      <span className="release">
                        {movieDetails.release_date.split("-").join("/")}
                      </span>

                      <i className="material-icons bullet">fiber_manual_record</i>
                      <span className="run-time">
                        {time_convert(parseInt(movieDetails.runtime))}
                      </span>
                    </div>
                    <div className="info--content__score-wrap">
                      <h2>{movieDetails.vote_average}/10</h2>
                    </div>
                  </div>

                  {/* overview */}
                  <div>
                    <h3 className="info--content__tagline">{movieDetails.tagline}</h3>
                    <div className="info--content__overview">
                      <h2 className="info--content__overview-title">Overview</h2>
                      <p className="info--content__overview-content">{movieDetails.overview}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASTS */}
      {/* <br/> */}
      <ScrollCollection collectionTitle='Cast in the lead roles' items={casts} />


      {/* COMMENTS */}
      <CommentSection movieId={movieId} />

      
    </div>
  );
};

export default MovieDetails;
