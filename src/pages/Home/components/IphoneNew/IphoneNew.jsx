import React from "react";
import './IphoneNew.css'
import Item from "../../../../components/Item";
import bestIphone from "../../../../Assets/bestIphone";
import { Link } from "react-router-dom";


function IphoneNew(props) {
  return (
    <div className="iphoneNew">
      <h1>iPhone</h1>
      <div className="iphoneNew-item">
        {bestIphone.map((prod, index) => (
            <Item key={index} id={prod.id} name={prod.name} image={prod.image} price={prod.price} />
        ))}
      </div>
      <div className="all">
        <Link to='/iphone'><p>Xem tất cả iphone</p></Link>
      </div>
    </div>
  );
}

export default IphoneNew;
