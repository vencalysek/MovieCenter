import React, { useState, useEffect } from "react";
import axios from "axios";
import { NOW_PLAYING } from "../ApiConfig";
import MovieCard from "../components/MovieCard";

const MoviesNowPlaying = () => {
    // useState Hook. items -> itemy ktere pretahneme z API, setItems -> funkce ktera     manipuluje state

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // call na API
    const fetchItems = async () => {
        const result = await axios(NOW_PLAYING);
        console.log(result.data.results);

        //todo: vlozit data pomoci setItems do state
        setItems(result.data.results.slice());
        //todo: az se nactou data loading se zmeni na false
        setIsLoading(false);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return isLoading ? (
        // nez se nactou data je pusteny spiner
        <p>Loading...</p>
    ) : (
        <div className="movie-section now-playing">
            <div className="main-section__heading">Now Playing</div>
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

export default MoviesNowPlaying;
