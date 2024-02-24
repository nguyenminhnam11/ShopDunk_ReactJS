import React, { useContext } from "react";
import "./ShopCategory.css";

import Item from "../../components/Item";
import { ShopContext } from "../../context/ShopContext";

function ShopCategory({ banner, category, title }) {

  const {all_products} = useContext(ShopContext)
  
  return (
    <div className="shop-category">
      <h1>{title}</h1>
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-products">
        {all_products.map((prod, index) => {
            if(category===prod.category) {
                return <Item key={index} id={prod.id} name={prod.name} image={prod.image} price={prod.price} />
            }
            return null;
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
