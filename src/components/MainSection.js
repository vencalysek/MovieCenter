import React from 'react';
// import MovieCard from './MovieCard';
import MoviesNowPlaying from './MoviesNowPlaying';
import MoviesPopular from './MoviesPopular';

const MainSection = () => {
    return (
        <div className="main-section">
            <MoviesNowPlaying />
            <MoviesPopular />

        </div>
    )
}

export default MainSection
