import React from "react";
import MovieDetails from "../movie-details/MovieDetails";
import MoviesNowPlaying from "../../pages/movies-now-plaing/MoviesNowPlaying";
import MoviesPopular from "../../pages/movies-popular/MoviesPopular";
import MoviesUpcoming from "../../pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "../../pages/movies-top-rated/MoviesTopRated";
import Home from '../../pages/home/Home'
import './mainSection.styles.scss'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainSection = () => {

    return (
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
    );
};

export default MainSection;
