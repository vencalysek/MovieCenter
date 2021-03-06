import "./sass/App.scss";
import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";
import {Switch, Route, Redirect} from "react-router-dom";
import {API_KEY, API_URL, NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "./ApiConfig";

// firebase
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData, useDocumentOnce} from "react-firebase-hooks/firestore";
import {auth, firestore, createUserProfileDoc} from "./firebase/firebase.config";

// redux
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

import Home from "./pages/home/Home";
import MoviesNowPlaying from "./pages/movies-now-plaing/MoviesNowPlaying";
import MoviesPopular from "./pages/movies-popular/MoviesPopular";
import MoviesUpcoming from "./pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "./pages/movies-top-rated/MoviesTopRated";
import MovieDetails from "./components/movie-details/MovieDetails";
import MoviesSearched from "./pages/movies-searched/MoviesSearched";
import SignInSignUpPage from "./pages/sign-in-sign-up/SignInSignUp";

const App = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  //*** LOGING IN FUNCTION
  const [userAuth] = useAuthState(auth);

  useEffect(async () => {
    if (userAuth) {
      const userRef = await createUserProfileDoc(userAuth);
      userRef.onSnapshot(snapShot => {
        dispatch(
          setCurrentUser({
            uid: snapShot.id,
            ...snapShot.data(),
          })
        );
      });
    }
  }, [userAuth]);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-section">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)}
            />

            <Route
              path="/now_playing"
              render={props => <MoviesNowPlaying {...props} url={NOW_PLAYING} />}
            />
            <Route
              path="/popular"
              render={props => <MoviesPopular {...props} url={POPULAR} />}
            />
            <Route
              path="/top_rated"
              render={props => <MoviesTopRated {...props} url={TOP_RATED} />}
            />
            <Route
              path="/upcoming"
              render={props => <MoviesUpcoming {...props} url={UPCOMING} />}
            />

            <Route path="/search=:searchQuery" component={MoviesSearched} />

            <Route path="/movie/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
