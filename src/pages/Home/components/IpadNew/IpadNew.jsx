import React from "react";

import Item from "../../../../components/Item";
import './IpadNew.css'
import bestIpad from "../../../../Assets/bestIpad";
import { Link } from "react-router-dom";
function IpadNew(props) {
    const handleSrollTop = () => {
        window.scroll(0,0)
    }

  return (
    <div className="ipadNew">
      <h1>iPad</h1>
      <div className="ipadNew-item">
        {bestIpad.map((prod, index) => (
          <Item
            key={index}
            id={prod.id}
            name={prod.name}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </div>
      <div className="all">
        <Link to='/ipad' onClick={handleSrollTop}><p>Xem tất cả ipad</p></Link>
      </div>
    </div>
  );
}

export default IpadNew;
