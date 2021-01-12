import React, {useState, useEffect} from "react";

import {Redirect} from "react-router-dom";

import "./search.styles.scss";

const Search = ({getQuery}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryFinal, setSearchQueryFinal] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleInput = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    if (searchQuery) {
      e.preventDefault();
      setSearchQueryFinal(searchQuery)
      setRedirect(true);
    }
  };

  useEffect(() => {
    getQuery(searchQueryFinal)
      // vymaze input
      setSearchQuery('')
  }, [searchQueryFinal])

  return (
    <div>
      {redirect ? <Redirect to={`/search=${searchQueryFinal}`} /> : null}
      <form action="#" className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInput}
        />
        <i className="material-icons search__icon" onClick={handleSubmit}>
          search
        </i>
      </form>
    </div>
  );
};

export default Search;
