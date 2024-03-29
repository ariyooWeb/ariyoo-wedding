// react
import React from "react";

const Modal = (props) => {
  return (
    props.visible && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-inner-close" onClick={closeModal}>
            &times;
          </div>
          <div className="modal-inner-slide">슬라이드</div>
        </div>
      </div>
    )
  );
};

export default Modal;
