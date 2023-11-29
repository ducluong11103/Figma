import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideShow.css";

import { data } from "./Slidedata";

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Giảm số lượng slides hiển thị
          slidesToScroll: 3, // Đổi số lượng slides cần scroll
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Giảm số lượng slides hiển thị
          slidesToScroll: 2, // Đổi số lượng slides cần scroll
          initialSlide: 1, // Đổi slide bắt đầu hiển thị ban đầu
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4, // Chỉ hiển thị 1 slide trên màn hình nhỏ
          slidesToScroll: 1, // Chỉ scroll 1 slide mỗi lần
        },
      },
    ],
    // customPaging: function(i) {
    //   return (
    //     <button
    //       style={{
    //         width: '8px',
    //         height: '8px',
    //         borderRadius: '50%',
    //         backgroundColor: 'white',
    //         border: 'none',
    //         outline: 'none',
    //       }}
    //     ></button>
    //   );
    // },
  };

  return (
    <div className="box">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="">
            <div className="card-top ">
              <img src={item.img} alt="" width={80} />
            </div>
            <div className="card-bottom">
              <h5 className="">{item.title}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
