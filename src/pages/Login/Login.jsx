import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import login from '../../images/login.jpeg'
function Login(props) {
  return (
    <div className="login">
      <div className="login-image">
        <img src={login} alt="" />
      </div>
      <div className="form-container">
        <h1>Đăng nhập</h1>
        <form>
            <input type="text" placeholder="Tên đăng nhập"/><br />
            <input type="password" placeholder="Mật khẩu"/><br />
            <button>Đăng nhập</button>
            <p>Bạn chưa có tài khoản ? <Link to='/register' style={{textDecoration: 'none'}}>Đăng kí</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
