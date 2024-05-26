import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { toast } from "react-toastify";

const ProductElement = ({ id, title, image, rating, price, brandName }) => {

  // const dispatch = useDispatch();

  const product = {
    id, title, image, rating, price, brandName, amount: 1
  };

  // const handleAddToCart = () => {
  //   dispatch(addToCart(product)); // Dispatch addToCart action
  // };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mr-1">
      <div className="shadow-md rounded-lg max-w-sm bg-base-100 flex flex-col h-full">
        <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="rounded-t-lg p-8 object-cover"
            src={`https://${image}`}
            alt="product image"
          />
        </Link>
        <div className="px-4 pb-4 flex-grow flex flex-col">
          <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <h3 className="font-semibold text-base tracking-tight mb-5 text-accent-content ">
              {title}
            </h3>
          </Link>
          <div className="flex flex-col items-start mt-auto">
            <span className="text-base font-bold text-accent-content m-0" style={{ color: "#d62828" }}>${price}</span>
            <span span className="text-sm text-gray-500 line-through mt-1 m-0">$100</span>

            {/* <div className="text-left mt-2 flex items-center m-0">
              {renderStars(rating)}
              <span className="text-sm text-gray-500 ml-2">{rating.toFixed(1)}</span>
            </div> */}

            <div className="flex items-center justify-between w-full mt-2">
              <div className="flex items-center">
                {renderStars(rating)}
                <span className="text-sm text-gray-500 ml-2">{rating.toFixed(1)}</span>
              </div>
              {/* <button
                className="btn bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full"
                onClick={handleAddToCart}
              >
                <FaCartShopping className="text-xl" />
              </button> */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
