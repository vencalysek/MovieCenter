import React, { useState } from "react";

const Search = ({ fetchItems }) => {
    const [searchText, setSearchText] = useState("");

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleSubmit = (e) => {
        if (searchText) {
            e.preventDefault();
            fetchItems(searchText);
            setSearchText('')
        }
    };

    return (
        <form action="#" className="search" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search__input"
                placeholder="Search movies..."
                value={searchText}
                onChange={handleInput}
            />
            <i className="material-icons search__icon" onClick={handleSubmit}>
                search
            </i>
        </form>
    );
};

export default Search;
