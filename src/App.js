import "./sass/App.scss";
import React, {useState} from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";
import {Switch, Route} from "react-router-dom";
import {API_KEY, API_URL, NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "./ApiConfig";

import Home from "./pages/home/Home";
import MoviesNowPlaying from "./pages/movies-now-plaing/MoviesNowPlaying";
import MoviesPopular from "./pages/movies-popular/MoviesPopular";
import MoviesUpcoming from "./pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "./pages/movies-top-rated/MoviesTopRated";
import MovieDetails from "./components/movie-details/MovieDetails";
import MoviesSearched from "./pages/movies-searched/MoviesSearched";

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const getQuery = (query) =>{
    setSearchQuery(query)
  }
   console.log('searched: ',searchQuery )

  return (
    <div className="app">
      <Header getQuery={getQuery} />
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

            <Route path="/search=:searchQuery" component={MoviesSearched} />


            <Route path="/movie/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
