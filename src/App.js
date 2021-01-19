import "./sass/App.scss";
import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";
import {Switch, Route} from "react-router-dom";
import {API_KEY, API_URL, NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "./ApiConfig";

// firebase
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData, useDocumentOnce} from "react-firebase-hooks/firestore";
import {auth, firestore} from "./firebase/firebase.config";

// redux
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

import Home from "./pages/home/Home";
import MoviesNowPlaying from "./pages/movies-now-plaing/MoviesNowPlaying";
import MoviesPopular from "./pages/movies-popular/MoviesPopular";
import MoviesUpcoming from "./pages/movies-upcoming/MoviesUpcoming";
import MoviesTopRated from "./pages/movies-top-rated/MoviesTopRated";
import MovieDetails from "./components/movie-details/MovieDetails";
import MoviesSearched from "./pages/movies-searched/MoviesSearched";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // logging in
  const [user] = useAuthState(auth);

  // creating user profile in firestore
  const userRef = user && firestore.doc(`users/${user.uid}`);
  const [userSnap] = useDocumentOnce(userRef);

  // ***************************USER COLLECTION DOCUMENTS
  // const userRefCollection = userRef && userRef.collection('123123qwe')
  // const userCollection = useCollectionData(userRefCollection)
  // console.log('userCollection', userCollection)
  // ***************************USER COLLECTION DOCUMENTS

  //*** CREATING PROFILE DOC FUNCTION
  const createUserProfileDoc = async (displayName, email, photoURL, uid) => {
    if (!userSnap.exists) {
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          uid,
          createdAt,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    } else {
      return userRef;
    }

    userRef.onSnapshot(snapShot => console.log(snapShot))
  };

  //*** LOGING IN FUNCTION
  useEffect(() => {
    if (userSnap) {
      const {displayName, email, photoURL, uid} = user;
      dispatch(setCurrentUser({displayName, email, photoURL, uid}));
      createUserProfileDoc(displayName, email, photoURL, uid)
    }
  }, [userSnap]);


  // *** SEARCH QUERY FUNCTION --> rebuild to redux
  const getQuery = query => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header getQuery={getQuery} />
      <div className="content">
        <Sidebar />
        <div className="main-section">
          <Switch>
            <Route path="/" exact component={Home} />

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
