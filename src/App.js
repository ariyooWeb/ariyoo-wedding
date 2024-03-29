import './app.scss';
import React, { useState } from "react";
import Modal from "./modal";
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

function App() {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const [index, setIndex] = useState(0);
  const data = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  const photoClick = (index) => {
    setIndex(index);
  };
  return (
    <div className="App">
      <div className="inner">
        <div className="main-page">
          <div className="main-page-invite">
            <div className="main-page-invite-weddingDay">WEDDING DAY</div>
            <div className="main-page-invite-text">
              효철&아름의 결혼식에 초대합니다
            </div>
          </div>
          <div className="main-page-divider"></div>
          <div className="main-page-names">
            <div className="main-page-names-name">최효철</div>
            <div className="main-page-names-name">유아름</div>
          </div>
          <div className="main-page-divider"></div>
          <div className="main-page-information">
            <div className="main-page-information-date">
              <div className="main-page-information-date-item">
                2024.05.25 토요일
              </div>
              <div className="main-page-information-date-item">오후 3:30</div>
            </div>
            <div className="main-page-information-lavidol">라비돌웨딩</div>
          </div>
        </div>
        <div className="text-page">
          같은 생각, 같은 마음으로 지혜롭게 살겠습니다. 저희 두 사람이 소중한
          분들을 모시고 사랑의 결실을 이루려 합니다. 오로지 믿음과 사랑만을
          약속하는 귀한 날에 축복의 걸음을 하시어 저희의 하나됨을 지켜보아
          주시고 격려해 주시면 더없는 기쁨으로 간직하겠습니다.
        </div>
        <div className="parents-box">
          <div className="parents-box-parents">
            <div className="parents-box-parents-parent">아버지 최연수</div>
            <div className="parents-box-parents-parent">어머니 문순남</div>
          </div>
          <div className="parents-box-parents">
            <div className="parents-box-parents-parent">아버지 최연수</div>
            <div className="parents-box-parents-parent">어머니 문순남</div>
          </div>
        </div>
        <div className="photo-page">
          <div className="photo-page-grid" onClick={() => setVisible(true)}>
            {data.map((item, index) => (
              <img
                src={item}
                className="photo-page-img"
                onClick={() => photoClick(index)}
              />
            ))}
          </div>
          <Modal
            visible={visible}
            closeModal={closeModal}
            initialSlide={index}
          />
        </div>
        <div className="location-page"></div>
        <div className="account-page"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
