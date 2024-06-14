import React from "react";
import Modal from "react-modal";
import QRCodePayment from "./QRCodePayment";
import "../styles/PaymentPopup.css";

const PaymentPopup = ({ isOpen, closeModal, cartItems }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="QR thanh toán"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="text-center">
        <h2>Quét mã để thanh toán</h2>
        <div className="qr-container">
          <QRCodePayment cartItems={cartItems} />
        </div>
        <button
          onClick={closeModal}
          className="btn bg-blue-600 text-white mt-4"
        >
          Đóng
        </button>
      </div>
    </Modal>
  );
};

export default PaymentPopup;
