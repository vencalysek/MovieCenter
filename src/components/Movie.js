import React from 'react'

const Movie = ({ item }) => {
    return (
        <div>
            <ul>
                <li><h3>{item.title}</h3></li>
                <li><img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt=""/></li>
                <li>{item.release_date}</li>
                <li>{item.overview}</li>
            </ul>
        </div>
    )
}

export default Movie
