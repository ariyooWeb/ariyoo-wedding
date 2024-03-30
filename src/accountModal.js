import React, { useState } from "react";
import "./accountModal.scss";

const AccountModal = (props) => {
  const closeAccountModal = () => {
    if (props.closeAccountModal) props.closeAccountModal();
  };
  return (
    props.visible && (
      <div className="accountModal">
        <div className="accountModal-inner">
          <div className="accountModal-inner-inner">
            <div className="accountModal-inner-box">
            {props.index === 0 && <div className="accountModal-inner-box">
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부 계좌</div>
                  <div className="accountModal-inner-box-header-copy">복사</div>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>신한(예금주: 유아름)</div>
                  <div>919123123123</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부혼주 계좌</div>
                  <div className="accountModal-inner-box-header-copy">복사</div>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>KB국민(예금주: 유봉인)</div>
                  <div>919123123123</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부혼주 계좌</div>
                  <div className="accountModal-inner-box-header-copy">복사</div>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>기업(예금주: 정규옥)</div>
                  <div>919123123123</div>
                </div>
              </div>
            </div>}
            {props.index === 1 && <div className="accountModal-inner-box">
              <div className="accountModal-inner-box-header">
                <div>신부 계좌</div>
                <div>복사</div>
              </div>
              <div className="accountModal-inner-box-body">
                <div>신한(예금주: 유아름)</div>
                <div>919123123123</div>
              </div>
            </div>}
            <div className="accountModal-inner-button" onClick={closeAccountModal}>
              닫기
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  );
};

export default AccountModal;
