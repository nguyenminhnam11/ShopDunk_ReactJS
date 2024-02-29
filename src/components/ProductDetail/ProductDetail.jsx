import React, { useContext } from "react";
import "./ProductDetail.css";
import { ShopContext } from "../../context/ShopContext";

function ProductDetail({ product }) {
  const {addToCart} = useContext(ShopContext)

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>

      <div>
        <p className="product-name">{product.name}</p>
        <div className="rate-star">
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
        </div>
        <div className="line"></div>
        <p className="product-price">{product.price}₫</p>
        <button className="btn-addToCart" onClick={() => {addToCart(product.id)}}>Thêm vào giỏ hàng</button>
      </div>  
    </div>
  );
}

export default ProductDetail;
