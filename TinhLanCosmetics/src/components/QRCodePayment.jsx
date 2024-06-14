import React from "react";
import QRCode from "qrcode.react";

const QRCodePayment = ({ cartItems }) => {
  const paymentUrl = `https://example.com/pay?items=${encodeURIComponent(
    JSON.stringify(cartItems)
  )}`;

  return (
    <div>
      <QRCode value={paymentUrl} size={256} />
    </div>
  );
};

export default QRCodePayment;
