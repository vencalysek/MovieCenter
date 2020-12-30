import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../../ApiConfig";
import Search from '../../components/searchbar/Search'
import MovieCard from "../../components/movie-card/MovieCard";
import spinner from "../../img/spinner.jpg";

import './home.styles.scss'

const Home = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(items)
    const fetchItems = async (query) => {
        setIsLoading(true);
        const result = await axios (
            `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setItems(result.data.results)
        setIsLoading(false);
    }


    return (
        <div className="movie-section home">
            <h1><strong>Welcome to MovieCenter</strong></h1>
            <h2>Explore this website to find a desired movies</h2>
            {/* <Search fetchItems={fetchItems} /> */}
            
            {isLoading ? (
        <img src={spinner} alt="loading" className="spinner" />
    ) :
            
            (<div className="container-fliud home__wrap">
                <div className="row">
                    {items.map((item) => (
                        <MovieCard key={item.id} item={item} />
                        ))}
                </div>
            </div>)
                    }
        </div>
    )
}

export default Home
