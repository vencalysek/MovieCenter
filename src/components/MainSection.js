import React from "react";
import MovieDetails from "./MovieDetails";
// import MovieCard from './MovieCard';
import MoviesNowPlaying from "./MoviesNowPlaying";
import MoviesPopular from "./MoviesPopular";

const MainSection = () => {
    return (
        <div className="main-section">
            <MovieDetails />
            <div className="main-section__movies">
                <MoviesNowPlaying />
                <MoviesPopular />
            </div>
        </div>
    );
};

export default MainSection;
