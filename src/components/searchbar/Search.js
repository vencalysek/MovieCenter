import React, {useState} from "react";
import axios from "axios";
import {API_KEY, API_URL} from "../../ApiConfig";

import {Redirect} from "react-router-dom";

import "./search.styles.scss";

// const Search = ({ fetchItems }) => {
const Search = ({getQuery}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const fetchItems = async () => {
    setIsLoading(true);
    const result = await axios(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    // console.log(result.data.results)
    setItems(result.data.results);
    setIsLoading(false);
  };

  const handleInput = e => {
    const text = e.target.value;
    setSearchQuery(text);
  };

  const handleSubmit = e => {
    if (searchQuery) {
      e.preventDefault();
      fetchItems();
      getQuery(searchQuery);
      setRedirect(true);
    }
  };

  return (
    <div>
      {redirect ? <Redirect to={`/search=${searchQuery}`} /> : null}
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
