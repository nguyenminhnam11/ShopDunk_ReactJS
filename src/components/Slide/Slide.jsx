import React from "react";
import { Carousel } from "antd";

import banner1 from "../../images/banner01.png";
import banner2 from "../../images/banner02.png";
import banner3 from "../../images/banner03.png";

function Slide(props) {
  const contentStyle = {
    width: "100%",
    height: "auto",
    lineHeight: "160px",
    marginTop: "64px"
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <img src={banner1} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={banner2} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={banner3} alt="" style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
}

export default Slide;
