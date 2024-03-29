import React, { useState } from "react";
import "./modal.scss";

const AccountModal = (props) => {
  const closeAccountModal = () => {
    if (props.closeAccountModal) props.closeAccountModal();
  };
  return (
    props.visible && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-inner-box">
            <div className="modal-inner-box-header">
              <div>신부 계좌</div>
              <div>복사</div>
            </div>
            <div className="modal-inner-box-body">
              <div>신한(예금주: 유아름)</div>
              <div>919123123123</div>
            </div>
          </div>
          <div className="modal-inner-box">
            <div className="modal-inner-box-header">
              <div>신부 계좌</div>
              <div>복사</div>
            </div>
            <div className="modal-inner-box-body">
              <div>신한(예금주: 유아름)</div>
              <div>919123123123</div>
            </div>
          </div>
          <div className="modal-inner-box">
            <div className="modal-inner-box-header">
              <div>신부 계좌</div>
              <div>복사</div>
            </div>
            <div className="modal-inner-box-body">
              <div>신한(예금주: 유아름)</div>
              <div>919123123123</div>
            </div>
          </div>
          <div className="modal-inner-button" onClick={closeAccountModal}>
            닫기
          </div>
        </div>
      </div>
    )
  );
};

export default AccountModal;
