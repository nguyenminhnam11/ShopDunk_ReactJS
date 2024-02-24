import React, { useContext } from "react";
import './Products.css'
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import { ShopContext } from "../../context/ShopContext";
import Breadcrums from "../../components/Breadcrums";

function Products(props) {
  const {all_products} = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e)=> e.id === Number(productId))

  console.log('chekc data',product) 
  return (
    <div className="products-container">
      <Breadcrums product={product}/>
      <ProductDetail product={product}/>
    </div>
  );
}

export default Products;
