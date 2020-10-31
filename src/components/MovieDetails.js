import React from "react";
import heroImg from "../img/movie_hero.jpg";
import posterImg from "../img/poster.jpg";

const MovieDetails = () => {
    // image styling
    const styleHeroImage = {
        backgroundImage: `url(${heroImg})`,
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

    return (
        <div className="movie-details">
            <div className="movie-details__hero">
                <div
                    className="movie-details__hero--img"
                    style={styleHeroImage}
                >
                    <div
                        className="movie-details__hero--overlay"
                        style={styleHeroOverlay}
                    >
                        <div className="movie-details--wrap">
                            {/* poster */}
                            <div className="movie-details__poster--wrap">
                                <img src={posterImg} alt="" />
                            </div>
                            {/* info */}
                            <div className="movie-details__info--wrap">
                                <section className="movie-details__info--content">
                                    {/* heading */}
                                    <div className="info--content__heading">
                                        <h1 className="info--content__heading-title">
                                            Warcraft <span>(2016)</span>
                                        </h1>
                                        <div className="info--content__heading-facts">
                                            <span className="certification">
                                                R
                                            </span>
                                            <span className="release">
                                                10/10/2020
                                            </span>

                                            {/* TADY BUDE TREBA UDELAT MAP NA ZANR FILMU */}
                                            <span className="info--content__heading-facts-genres">
                                                <p>Action</p>
                                                <p>Fantasy</p>
                                            </span>
                                            <span className="run-time">
                                                1h 55m
                                            </span>
                                        </div>
                                    </div>

                                    {/* score */}
                                    {/* overview */}
                                    <div className="info--content__overview">
                                        <h1 className="info--content__overview-title">
                                            Overview
                                        </h1>
                                        <p className="info--content__overview-content">
                                            The peaceful realm of Azeroth stands
                                            on the brink of war as its
                                            civilization faces a fearsome race
                                            of invaders: orc warriors fleeing
                                            their dying home to colonize
                                            another. As a portal opens to
                                            connect the two worlds, one army
                                            faces destruction and the other
                                            faces extinction. From opposing
                                            sides, two heroes are set on a
                                            collision course that will decide
                                            the fate of their family, their
                                            people, and their home.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-details__back-link">
                <a href="#">
                    <i className="material-icons">arrow_back</i>
                </a>
            </div>
        </div>
    );
};

export default MovieDetails;
