import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOP_RATED } from "../../ApiConfig";
import MovieCard from "../../components/movie-card/MovieCard";
import spinner from "../../img/spinner.jpg";

const MoviesTopRated = () => {
    // useState Hook. items -> itemy ktere pretahneme z API, setItems -> funkce ktera     manipuluje state

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // call na API
    const fetchItems = async () => {
        const result = await axios(TOP_RATED);
        console.log(result.data.results);

        //todo: vlozit data pomoci setItems do state
        setItems(result.data.results.slice(0,20));
        //todo: az se nactou data loading se zmeni na false
        setIsLoading(false);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return isLoading ? (
        <img src={spinner} alt="loading" className="spinner" />
    ) : (
        <div className="movie-section now-playing">
            <div className="main-section__heading">Top Rated</div>
            <div className="container-fliud main-section__wrap">
                <div className="row">
                    {items.map((item) => (
                        <MovieCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesTopRated;
