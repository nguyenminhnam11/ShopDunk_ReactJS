import React from "react";
import "./Register.css";
import regiser from "../../images/register.jpeg";
import { Link } from "react-router-dom";
function Register(props) {
  return (
    <div className="register">
      <div className="register-image">
        <img src={regiser} alt="" />
      </div>
      <div className="form-container">
        <h1>Đăng ký</h1>
        <form>
          <input type="text" placeholder="Tên đăng nhập" />
          <br />
          <input type="email" placeholder="Địa chỉ email" />
          <br />
          <input type="password" placeholder="Mật khẩu" />
          <br />
          <button>Đăng kí</button>
          <p>
            Bạn đã có tài khoản ?
            <Link to="/login" style={{ textDecoration: "none" }}>
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
