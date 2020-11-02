import React from "react";
import MovieDetails from "./MovieDetails";
import MoviesNowPlaying from "../pages/MoviesNowPlaying";
import MoviesPopular from "../pages/MoviesPopular";
import MoviesUpcoming from "../pages/MoviesUpcoming";
import MoviesTopRated from "../pages/MoviesTopRated";
import Home from "../pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainSection = () => {
    return (
        <div className="main-section">
            {/* <MovieDetails /> */}
            <div className="main-section__movies">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/now-playing"
                            exact
                            component={MoviesNowPlaying}
                        />
                        <Route path="/popular" component={MoviesPopular} />
                        <Route path="/top-rated" component={MoviesTopRated} />
                        <Route path="/upcoming" component={MoviesUpcoming} />
                    </Switch>

                {/* <MoviesNowPlaying /> */}
                {/* <MoviesPopular /> */}
            </div>
        </div>
    );
};

export default MainSection;
