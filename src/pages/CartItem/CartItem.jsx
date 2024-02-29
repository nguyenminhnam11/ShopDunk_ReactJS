import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";

function CartItem(props) {
  const {getTotalCart, all_products, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
        <table className="cartItem-table">
        <thead>
          <tr>
            <th className="image-col">Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItem[e.id] > 0) {
              return (  
                <tr key={e.id}>
                  <td className="image-col">
                    <img src={e.image} alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>{cartItem[e.id]}</td>
                  <td>{e.price}</td>
                  <td>
                    <i class="fa-solid fa-trash" onClick={() => {removeFromCart()}} style={{fontSize: '18px', cursor: 'pointer', transition: '0.3s'}} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = '#000'}></i>
                  </td>
                </tr>  
              );
            }
            return null;
          })}
          </tbody>
        </table>
      <div className="sidebar-cartItem">
        <div className="voucher">
            <input type="text" placeholder="Nhập mã giảm giá"/>
            <button>Áp dụng</button>
        </div>
        <div className="total">
            <p>Tổng cộng:</p>
            <p>{getTotalCart()}</p>
        </div>
        <div className="line-total"></div>
        <div className="rule">
            <input type="checkbox" />
            <p>Tôi đã đọc và đồng ý điều khoản và diều kiện của website</p>
        </div>
        <button className="btn-pay">Tiến hành thanh toán</button>
      </div>
    </div>
  );
}

export default CartItem;
