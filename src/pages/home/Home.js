import React from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useSelector} from "react-redux";
import MovieCard from "../../components/movie-card/MovieCard";
import {firestore} from "../../firebase/firebase.config";

import "./home.styles.scss";

const Home = () => {
  const {currentUser} = useSelector(state => state.user);

  const favouriteMoviesRef =
    currentUser &&
    firestore.collection("users").doc(currentUser.uid).collection("favouriteMovies");

  const [favouriteMovies] = useCollectionData(favouriteMoviesRef);

  return (
    <div className="movie-section home">
      <div className="home__wrap">
        {currentUser ? (
          <div className="logged-user">Welcome {currentUser.displayName.split(' ')[0]}</div>
        ) : (
          <div className="no-user">
            <h1>Welcome to MovieCenter</h1>
            <h2>Explore this website to find a desired movies</h2>
            <br />
            <br />
            <p>
              You can Sign In and get accest to more functions provided by this application
            </p>
              <ul>
                <li>mark favourite movie</li>
                <li>delete comment</li>
              </ul>
          </div>
        )}
      </div>

      {favouriteMovies && favouriteMovies.length ? (
        <div className="container-fliud m-5">
          <p className="m-4">YOUR FAVOURITE MOVIES</p>
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
