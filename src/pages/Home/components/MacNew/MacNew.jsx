import React from "react";
import './MacNew.css'
import Item from "../../../../components/Item";
import { Link } from "react-router-dom";
import bestMac from "../../../../Assets/bestMac";

function MacNew(props) {
  return (
    <div className="MacNew">
      <h1>Mac</h1>
      <div className="MacNew-item">
        {bestMac.map((prod, index) => (
            <Item key={index} id={prod.id} name={prod.name} image={prod.image} price={prod.price} />
        ))}
      </div>
      <div className="all">
        <Link to='/macbook'><p>Xem tất cả Mac</p></Link>
      </div>
    </div>
  );
}

export default MacNew;
