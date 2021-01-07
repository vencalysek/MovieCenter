import React, {useState, useEffect} from "react";
// api
import axios from "axios";
import {API_KEY, API_URL} from "../../ApiConfig";

// router
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

import spinner from "../../img/spinner.jpg";

import "./movieDetails.styles.scss";
import ScrollCollection from "../scroll-collection/ScrollCollection";

const MovieDetails = () => {
  // ! API CALL

  const [item, setItem] = useState([]);
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {movieId} = useParams();
  const [favourite, setFavourite] = useState(false);
  const history = useHistory();

  const fetchItem = async () => {
    try {
      const resultItem = await axios(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
      // console.log(resultItem.data);
      //todo: vlozit data pomoci setItem do state
      setItem(resultItem.data);

      const resultCasts = await axios(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
      setCasts(resultCasts.data.cast.slice(0,25))
      //todo: az se nactou data loading se zmeni na false
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      fetchItem();
    }, 500);
  }, []);

  console.log(item)

  const time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + "h " + minutes + "m";
  };

  const getGenre = () => {
    let showGenres = [];
    for (let i = 0; i < item.genres.length; i++) {
      showGenres.push(item.genres[i].name);
    }
    return showGenres.join(", ");
  };

  // zatim nefunguje jak ma, nezustane ulozeny state a refreshuje stranku
  const movieFavourite = e => {
    e.preventDefault();
    setFavourite(!favourite);
  };

  // ! STYLING
  // image styling
  const styleHeroImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
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
                <div>
                  {favourite ? (
                    <i
                      onClick={movieFavourite}
                      className="material-icons star star-active">
                      star
                    </i>
                  ) : (
                    <i
                      onClick={movieFavourite}
                      className="material-icons star star-inactive">
                      star_border
                    </i>
                  )}
                </div>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
              </div>
              {/* info */}
              <div className="movie-details__info--wrap">
                <section className="movie-details__info--content">
                  {/* heading */}
                  <div className="info--content__heading">
                    <h1 className="info--content__heading-title">{item.title}</h1>
                    <div className="info--content__heading-facts">
                      <span className="info--content__heading-facts-genres">
                        {getGenre()}
                      </span>
                      <i className="material-icons bullet">fiber_manual_record</i>

                      <span className="release">
                        {item.release_date.split("-").join("/")}
                      </span>

                      <i className="material-icons bullet">fiber_manual_record</i>
                      <span className="run-time">
                        {time_convert(parseInt(item.runtime))}
                      </span>
                    </div>
                    <div className="info--content__score-wrap">
                      <h2>{item.vote_average}/10</h2>
                    </div>
                  </div>

                  {/* overview */}
                  <div>
                    <h3 className="info--content__tagline">{item.tagline}</h3>
                    <div className="info--content__overview">
                      <h2 className="info--content__overview-title">Overview</h2>
                      <p className="info--content__overview-content">{item.overview}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASTS */}
      <br/>
      <h2 className='cast-heading'>Cast in the lead roles</h2>
      <ScrollCollection items={casts} />

      
    </div>
  );
};

export default MovieDetails;
