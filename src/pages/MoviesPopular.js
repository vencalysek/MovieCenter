import React, { useState, useEffect } from "react";
import axios from "axios";
import { POPULAR } from "../ApiConfig";
import MovieCard from "../components/MovieCard";

const PopularMovies = () => {
    // useState Hook. items -> itemy ktere pretahneme z API, setItems -> funkce ktera     manipuluje state

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(POPULAR);
            console.log(result.data.results);

            //todo: vlozit data pomoci setItems do state
            setItems(result.data.results);
            //todo: az se nactou data loading se zmeni na false
            setIsLoading(false);
        };

        fetchItems();
        // [query] je dependency, pokazde co se zmeni, se odpali funkce useFetch
    }, [query]);

    return isLoading ? (
        // nez se nactou data je pusteny spiner
        <p>Loading...</p>
    ) : (
        <div className="movie-section movies__popular">
            <div className="main-section__heading">Popular</div>
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
