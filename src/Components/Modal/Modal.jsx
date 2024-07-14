// Modal.js
import React from "react";
import "./Modal.css";
import ShareComponent from "./ShareComponent";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="close-btn-box">

        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        </div>
       
        <div className="modal-content">
          <ShareComponent></ShareComponent>
        </div>
      </div>
    </div>
  );
}

export default Modal;
