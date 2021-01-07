import React from "react";
import "./castCard.styless.scss";

const CastCard = ({item}) => {
  return (
    <div className="cast-card card">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
        alt="cast"
        className="card-img-top"
      />
      <h3 className="cast-card__title">
        <strong>{item.name}</strong>
      </h3>
      <h4 className="cast-card__subtitle">{item.character}</h4>
    </div>
  );
};

export default CastCard;
