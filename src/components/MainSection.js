import React from 'react';
import MovieCard from './MovieCard';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="main-section__heading">
                Now Playing
            </div>
                <div className="container-fliud main-section__wrap">
                    <div className="row">
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                    </div>


                </div>
            </div>
    )
}

export default MainSection
