import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
        <h1>Liên hệ</h1>
      <div className="info-contact">
        <div className="info-item">
            <div className="info-icon">
                <i class='bx bxs-phone'></i>
            </div>
            <div className="info-p">
                <p>0987654321</p>
            </div>
        </div>
        <div className="info-item">
            <div className="info-icon">
                <i class='bx bxs-envelope'></i>
            </div>
            <div className="info-p">
                <p>nguyenminhnam1739@gmail.com</p>
            </div>
        </div>
        <div className="info-item">
            <div className="info-icon">
                <i class='bx bxs-map'></i>
            </div>
            <div className="info-p">
                <p>Thanh Khe, Da Nang, Viet Nam</p>
            </div>
        </div>
      </div>
      <div className="address-contact">
        <div className="map">
          <iframe
            width="100%"
            height="440"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Thanh%20Khe,%20Da%20Nang,%20Viet%20Nam+(Shop%20Dunk)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
        <div className="send-email">
            <h3>Cần hỗ trợ hoặc thắc mắc</h3>
          <form>
            <input type="text" placeholder="Họ và tên"/>
            <input type="email" placeholder="Email"/>
            <textarea name="" id="" cols="30" rows="7" placeholder="Tin nhắn"></textarea>
            <button>Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
