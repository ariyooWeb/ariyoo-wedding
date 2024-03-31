import './app.scss';
import './reset.css';
import React, { useState } from "react";
import Modal from "./modal";
import AccountModal from "./accountModal";
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
import map from "./img/map.jpg";
import flower from "./img/flower.png"

function App() {
  const [visible, setVisible] = useState(false);
  const [accountIndex, setAccountIndex] = useState(undefined);
  const closeModal = () => {
    setVisible(false);
  };
  const closeAccountModal = () => {
    setAccountIndex(undefined);
  };
  const [index, setIndex] = useState(0);
  const data = [
    img1,
    img2,
    img4,
    img3,
    img5,
    img6,
    img7,
    img11,
    img12,
    img10,
    img8,
    img9,
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
            <div className="main-page-information-lavidol">라비돌웨딩 강남 2층 오뗄홀</div>
          </div>
          <div className="main-page-flower"><img src={flower}/></div>
        </div>
        <div className="text-page">
          같은 생각, 같은 마음으로 지혜롭게 살겠습니다.<br/> 저희 두 사람이 소중한
          분들을 모시고 사랑의 결실을 이루려 합니다. 오로지 믿음과 사랑만을
          약속하는 귀한 날에 축복의 걸음을 하시어 저희의 하나됨을 지켜보아
          주시고 격려해 주시면 더없는 기쁨으로 간직하겠습니다.
        </div>
        <div className="parents-page">
          <div className="parents-page-box">
            <div className="parents-page-box-side">
              신랑측 혼주
            </div>
            <div className="parents-page-box-names">
              <div className="parents-page-box-names-name">아버지 최연수</div>
              <div className="parents-page-box-names-name">어머니 문순남</div>
            </div>
          </div>
          <div className="parents-page-box-divider"></div>
          <div className="parents-page-box">
            <div className="parents-page-box-side">
              신부측 혼주
            </div>
            <div className="parents-page-box-names">
              <div className="parents-page-box-names-name">아버지 유봉인</div>
              <div className="parents-page-box-names-name">어머니 정규옥</div>
            </div>
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
        <div className="location-page">
          <div className="location-page-main">
            <div className="location-page-main-bold">라비돌웨딩강남</div>
            <div className="location-page-main-bold">서울시 강남구 논현로79길 72 (서울 강남구 역삼동 828-10)</div>
          </div>
          <div className="location-page-divider"></div>
          <div className="location-page-way">
            <div className="location-page-way-type-title">셔틀버스 운행</div>
            <div className="location-page-way-type-box">
              2호선 강남역 1번출구 &#8594; 라비돌웨딩강남
            </div>
          </div>
          <div className="location-page-divider"></div>
          <div className="location-page-way">
            <div className="location-page-way-type">
              <div className="location-page-way-type-title">버스 이용시</div>
              <div className="location-page-way-type-flex">
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&#9724;</div> 간선(파랑)</div>
                    <div className="location-page-way-type-box-number-bus">140, 146, 341, 360, 400, 402, 420, 440, 441, 452, 470, 541, 542, 740, 741</div>
                  </div>
                </div>
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&#9724;</div> 광역(빨강)</div>
                    <div className="location-page-way-type-box-number-bus">9404, 9408, M4403, M4434, M5438, M6427, M6439, M7412</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-page-divider"></div>
            <div className="location-page-way-type">
              <div className="location-page-way-type-title">지하철 이용시</div>
              <div className="location-page-way-type-box">2호선 강남역 하차 &#8594; 1번출구 역삼역방면으로 오다가 우리은행에서 우회전 200M 정도 가면 도착</div>
            </div>
          </div>
          <div className="location-page-divider"></div>
          <div className="location-page-way">
            <div className="location-page-way-type-title">
              자가용 이용시
            </div>
            <div className="location-page-way-type">
              <div className="location-page-way-type-box">
                <span className="location-page-way-type-box-text"><div className="location-page-way-type-box-text-dot">&#9724;</div> 한남대교 방면에서 오실경우: </span><span className="location-page-way-type-light">강남역사거리에서 좌회전 &#8594; 우리은행에서 우회전 200M</span>
              </div>
              <div className="location-page-way-type-box">
                <span className="location-page-way-type-box-text"><div className="location-page-way-type-box-text-dot">&#9724;</div> 코엑스 방면에서 오실경우: </span><span className="location-page-way-type-box-text">강남역사거리에서 U턴 &#8594;	 우리은행에서 우회전 200M</span>
              </div>
            </div>
          </div>
        </div>
        <div className="map-page">
            <img src={map} />
          </div>
        <div className="account-page">
          <div className="account-page-title">신랑 & 신부에게 마음 전하실 곳</div>
          <div className="account-page-box">
            <div
              className="account-page-box-one"
              onClick={() => setAccountIndex(0)}
            >
              신랑측 계좌번호
            </div>
            <div
              className="account-page-box-one"
              onClick={() => setAccountIndex(1)}
            >
              신부측 계좌번호
            </div>
          </div>
          <AccountModal
            visible={accountIndex !== undefined && true}
            closeAccountModal={closeAccountModal}
            index={accountIndex}
          />
        </div>
        <div className="footer">
          made by ahreum<br/>
          저희의 결혼을 축복해주세요.<br/>감사합니다
        </div>
      </div>
    </div>
  );
}

export default App;
