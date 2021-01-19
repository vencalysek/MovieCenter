import React from "react";
import "./castCard.styless.scss";
import {ReactComponent as ManAvatar} from "../../assets/man.svg";
import {ReactComponent as WomanAvatar} from "../../assets/woman.svg";

const CastCard = ({item}) => {
  return (
    <div className="cast-card card">
      {item.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
          alt="cast"
          className="card-img-top"
        />
      ) : ( item.gender == 2 ?
        <ManAvatar className="cast-avatar" /> : <WomanAvatar className="cast-avatar" />
      )}
      <h3 className="cast-card__title">
        <strong>{item.name}</strong>
      </h3>
      <h4 className="cast-card__subtitle">{item.character}</h4>
    </div>
  );
};

export default CastCard;
