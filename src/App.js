import "./sass/App.scss";
import React, {useState, useEffect} from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";
import {Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import {API_KEY, API_URL} from "./ApiConfig";

import Home from './pages/home/Home'
import MoviesNowPlaying from './pages/movies-now-plaing/MoviesNowPlaying'
import MoviesPopular from './pages/movies-popular/MoviesPopular'
import MoviesUpcoming from "./pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "./pages/movies-top-rated/MoviesTopRated";
import MovieDetails from './components/movie-details/MovieDetails'


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-section">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/now_playing" exact component={MoviesNowPlaying} />
                <Route path="/popular" component={MoviesPopular} />
                <Route path="/top_rated" component={MoviesTopRated} />
                <Route path="/upcoming" component={MoviesUpcoming} />
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
