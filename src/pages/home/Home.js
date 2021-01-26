import React from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useSelector} from "react-redux";
import MovieCard from "../../components/movie-card/MovieCard";
import {firestore} from "../../firebase/firebase.config";

import "./home.styles.scss";

const Home = () => {
  const {currentUser} = useSelector(state => state.user);
  // console.log(currentUser && currentUser.uid)

  const favouriteMoviesRef =
    currentUser &&
    firestore.collection("users").doc(currentUser.uid).collection("favouriteMovies");

  const [favouriteMovies] = useCollectionData(favouriteMoviesRef);
  console.log(favouriteMovies);

  return (
    <div className="movie-section home">
      <div className="home__wrap">
        {currentUser ? (
          <div className="logged-user">Hello {currentUser.displayName}</div>
        ) : (
          <div className="no-user">
            <h1>Welcome to MovieCenter</h1>
            <h2>Explore this website to find a desired movies</h2>
          </div>
        )}
      </div>

      {favouriteMovies && favouriteMovies.length ? (
        <div className="container-fliud m-5">
          <p className="m-4">Your favourite movies...</p>
          <div className="row">
            {favouriteMovies.map(item => (
              <MovieCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
