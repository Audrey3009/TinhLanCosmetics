import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const ProductElement = ({ id, title, image, rating, price, brandName }) => {
  const product = {
    id, title, image, rating, price, brandName, amount: 1
  };
  return (
    <div className="max-w-2xl">
      <div className="shadow-md rounded-lg max-w-sm bg-base-100 flex flex-col h-full">
        <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="rounded-t-lg p-8 object-cover"
            src={`https://${image}`}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5 flex-grow flex flex-col">
          <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <h3 className="font-semibold text-base tracking-tight mb-5 text-accent-content ">
              {title}
            </h3>
          </Link>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-accent-content" style={{ color: "#d62828" }}>${price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">$100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
