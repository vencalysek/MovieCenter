import React from "react";
import CastCard from "../cast-card/CastCard";
import "./scrollCollection.styless.scss";

const ScrollCollection = ({items, collectionTitle}) => {
  console.log(items);
  return (
    <div className="item-collection__container">
      <h2 className='item-collection__title'>{collectionTitle}</h2>
      <div className="item-collection__container--sides">
        {items.map(item => (
          <CastCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ScrollCollection;
