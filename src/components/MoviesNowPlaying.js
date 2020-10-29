import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY, TOP_RATED, POPULAR, NOW_PLAYING } from "../ApiConfig";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
    // useState Hook. items -> itemy ktere pretahneme z API, setItems -> funkce ktera     manipuluje state

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    let type = NOW_PLAYING;

    useEffect(() => {
        const fetchItems = async (type) => {
            const result = await axios(`${API_URL}${type}?api_key=${API_KEY}`);
            console.log(result.data.results);

            //todo: vlozit data pomoci setItems do state
            setItems(result.data.results.slice(0,1));
            //todo: az se nactou data loading se zmeni na false
            setIsLoading(false);
        };

        fetchItems(type);
        // [query] je dependency, pokazde co se zmeni, se odpali funkce useFetch
    }, [query]);

    return isLoading ? (
        // nez se nactou data je pusteny spiner
        <p>Loading...</p>
    ) : (
        <div className="movies__popular">
            <div className="main-section__heading">Now Playing</div>
            <div className="container-fliud main-section__wrap">
                <div className="row">
                    {items.map((item) => (
                        // <h1 key={item.char_id} >{item.name}</h1>
                        <MovieCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularMovies;
