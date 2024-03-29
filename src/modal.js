// react
import React, { useState } from "react";
import "./modal.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";

const Modal = (props) => {
  const closeModal = () => {
    if (props.closeModal) props.closeModal();
  };

  const settings = {
    dots: false,
    infinit: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.initialSlide,
  };
  return (
    props.visible && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-inner-close" onClick={closeModal}>
            &times;
          </div>
          <div className="modal-inner-slide">
            <Slider {...settings}>
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />
              <img src={img5} />
              <img src={img6} />
              <img src={img7} />
              <img src={img8} />
              <img src={img9} />
              <img src={img10} />
              <img src={img11} />
              <img src={img12} />
            </Slider>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
