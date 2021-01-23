import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {firestore} from "../../firebase/firebase.config";
import {useDocumentOnce} from "react-firebase-hooks/firestore";
import "./btnFavourite.styles.scss";

const BtnFavourite = ({movieId, posterPath}) => {
  const [favourite, setFavourite] = useState(false);
  const {currentUser} = useSelector(state => state.user);

  const favouriteMoviesRef =
    currentUser && firestore.doc(`users/${currentUser.uid}/favouriteMovies/${movieId}`);

  const [favouriteSnap] = useDocumentOnce(favouriteMoviesRef);

  const movieFavourite = async e => {
    e.preventDefault();

    if (!favouriteSnap.exists) {
      setFavourite(!favouriteSnap.exists);
      await favouriteMoviesRef.set({
        movieId,
        posterPath,
      });
    } else {
      console.log("deleted");
      favouriteMoviesRef.delete();
      setFavourite(false);
    }
  };

  // nastavi favourite state po renderu
  useEffect(() => {
    setFavourite(favouriteSnap && favouriteSnap.exists);
  }, [favouriteSnap]);

  return (
    <div>
      {currentUser ? (
        favourite ? (
          <i
            onClick={movieFavourite}
            className="material-icons btn-favourite btn-favourite__active">
            star
          </i>
        ) : (
          <i
            onClick={movieFavourite}
            className="material-icons btn-favourite btn-favourite__inactive">
            star_border
          </i>
        )
      ) : null}
    </div>
  );
};

export default BtnFavourite;
