import React from "react";
import { useState, useEffect } from "react";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PaymentPopup from "../components/PaymentPopup";

const Cart = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (modalIsOpen) {
      timer = setTimeout(() => {
        setModalIsOpen(false);
        navigate("/src/pages/ThankYou.jsx");
      }, 120000); // 15 giây
    }
    return () => clearTimeout(timer);
  }, [modalIsOpen, navigate]);

  const openModal = () => {
    if (cartItems.length === 0) {
      toast.error("Giỏ hàng trống");
    } else {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // const isCartEmpty = () => {
  //   if (cartItems.length === 0) {
  //     toast.error("Giỏ hàng trống");
  //   } else {
  //     setModalIsOpen(true);
  //   }
  // };

  // Modal state
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <>
      <SectionTitle title="Giỏ hàng" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {loginState ? (
            <button
              onClick={openModal}
              className="btn bg-blue-600 hover:bg-blue-500 text-white btn-block mt-8"
            >
              Thanh toán
            </button>
          ) : (
            <Link
              to="/login"
              className="btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8"
            >
              Vui lòng đăng nhập
            </Link>
          )}
        </div>
      </div>

      {/* PaymentPopup */}

      <PaymentPopup
        isOpen={modalIsOpen}
        closeModal={closeModal}
        cartItems={cartItems}
      />
    </>
  );
};

export default Cart;
