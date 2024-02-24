import React from "react";
import "./Footer.css";
import footer_logo from "../../images/Logo_ShopDunk.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <i className='bx bxl-instagram-alt' style={{color:'#DE3E6F'}}  ></i>
          </div>
          <div className="footer-icons-container">
            <i className='bx bxl-facebook-circle' style={{color:'#3a9aea'}}  ></i>
          </div>
          <div className="footer-icons-container">
            <i className="bx bxl-youtube" style={{color:'#e70d0d'}}></i>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>@ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
