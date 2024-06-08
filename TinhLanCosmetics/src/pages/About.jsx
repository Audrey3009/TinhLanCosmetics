import React, { useState } from "react";
import axios from "axios";

const OrderLookupPage = () => {
  const [orderId, setOrderId] = useState("");
  const [orderInfo, setOrderInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleOrderLookup = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/orders/${orderId}`);
      setOrderInfo(response.data);
      setError(null);
    } catch (error) {
      setOrderInfo(null);
      setError("Không tìm thấy đơn hàng với mã này.");
    }
  };

  return (
    <div className="order-lookup-page">
      <h1>Tra cứu đơn hàng</h1>
      <input
        type="text"
        placeholder="Nhập mã đơn hàng"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleOrderLookup}>Tra cứu</button>
      {error && <p className="error-message">{error}</p>}
      {orderInfo && (
        <div className="order-info">
          <h2>Thông tin đơn hàng</h2>
          <p>Mã đơn hàng: {orderInfo.id}</p>
          <p>Tổng tiền: {orderInfo.total}</p>
          {/* Hiển thị các thông tin khác về đơn hàng */}
        </div>
      )}
    </div>
  );
};

export default OrderLookupPage;
