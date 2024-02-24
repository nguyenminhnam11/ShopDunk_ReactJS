import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, image, name, price }) {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <div className="item-image">
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            src={image}
            alt=""
            className="item-img"
          />
        </div>
      </Link>
      <p className="item-name">{name}</p>
      <p className="item-price">{price}</p>
    </div>
  );
}

export default Item;
