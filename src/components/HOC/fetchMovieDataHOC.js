import React, {useState, useEffect} from "react";
import axios from "axios";
import spinner from "../../img/spinner.jpg";

const fetchMovieDataHOC = WrappedComponents => {
  const WithData = ({url}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // call na API
    const fetchItems = async () => {
      const result = await axios(url);
      console.log(result.data.results);

      //todo: vlozit data pomoci setItems do state
      setItems(result.data.results.slice(0, 20));
      //todo: az se nactou data loading se zmeni na false
      setIsLoading(false);
    };

    useEffect(() => {
      fetchItems();
    }, []);

    console.log(items)

    return isLoading ? (
      <img src={spinner} alt="loading" className="spinner" />
    ) : (
      <WrappedComponents items={items} />
    );
  };

  return WithData;
};

export default fetchMovieDataHOC;
