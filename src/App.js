import "./sass/App.scss";
import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";
import {Switch, Route, Redirect} from "react-router-dom";
import {NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "./ApiConfig";

import Home from "./pages/home/Home";
import MoviesNowPlaying from "./pages/movies-now-plaing/MoviesNowPlaying";
import MoviesPopular from "./pages/movies-popular/MoviesPopular";
import MoviesUpcoming from "./pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "./pages/movies-top-rated/MoviesTopRated";
import MovieDetails from "./components/movie-details/MovieDetails";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-section">
          <Switch>
            <Route path="/" exact component={Home} />
            
            <Route
              path="/now_playing"
              render={props => <MoviesNowPlaying {...props} url={NOW_PLAYING} />}
            />
            <Route
              path="/popular"
              render={props => <MoviesPopular {...props} url={POPULAR} />}
            />
            <Route
              path="/top_rated"
              render={props => <MoviesTopRated {...props} url={TOP_RATED} />}
            />
            <Route
              path="/upcoming"
              render={props => <MoviesUpcoming {...props} url={UPCOMING} />}
            />

            <Route path="/movie/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

// TODO
/********
 *
 * // todo: routing - done
 * // todo: movie details - main logic done
 *
 * // todo: homepage
 * // todo: movie details back button
 * // todo: search api
 * todo: save favourit
 *
 * todo: improving movie details with actors, pic and vids
 * todo: will see
 */
