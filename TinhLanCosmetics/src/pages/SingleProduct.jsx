import axios from "axios";
import React, { useState } from "react";
import {
  QuantityInput,
  SectionTitle,
  SelectSize,
  SingleProductRating,
  SingleProductReviews,
} from "../components";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { Link, useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  updateWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { store } from "../store";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios(`http://localhost:8080/products/${id}`);

  return { productData: response.data };
};

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const { wishItems } = useSelector((state) => state.wishlist);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [rating, setRating] = useState([
    "empty star",
    "empty star",
    "empty star",
    "empty star",
    "empty star",
  ]);

  const { productData } = useLoaderData();

  const product = {
    id: productData?.id + size,
    title: productData?.name,
    image: productData?.imageUrl,
    rating: productData?.rating,
    price: productData?.price?.current?.value,
    brandName: productData?.brandName,
    amount: quantity,
    selectedSize: size || productData?.availableSizes[0],
    isInWishList:
      wishItems.find((item) => item.id === productData?.id + size) !==
      undefined,
  };

  for (let i = 0; i < productData?.rating; i++) {
    rating[i] = "full star";
  }

  const addToWishlistHandler = async (product) => {
    try {
      const getResponse = await axios.get(
        `http://localhost:8080/user/${localStorage.getItem("id")}`
      );
      const userObj = getResponse.data;

      
      userObj.userWishlist = userObj.userWishlist || [];

      userObj.userWishlist.push(product);

      const postResponse = await axios.put(
        `http://localhost:8080/user/${localStorage.getItem("id")}`,
        userObj
      );

      
      store.dispatch(updateWishlist({ userObj }));
      toast.success("Product added to the wishlist!");
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlistHandler = async (product) => {
    const getResponse = await axios.get(
      `http://localhost:8080/user/${localStorage.getItem("id")}`
    );
    const userObj = getResponse.data;

    userObj.userWishlist = userObj.userWishlist || [];

    const newWishlist = userObj.userWishlist.filter(
      (item) => product.id !== item.id
    );

    userObj.userWishlist = newWishlist;

    const postResponse = await axios.put(
      `http://localhost:8080/user/${localStorage.getItem("id")}`,
      userObj
    );

    
    store.dispatch(removeFromWishlist({ userObj }));
    toast.success("Product removed from the wishlist!");
  };

  const handlePrev = () => {
    setCurrentStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productData.additionalImageUrls.length - 2
    );
  };

  const handleNext = () => {
    setCurrentStartIndex((prevIndex) =>
      prevIndex < productData.additionalImageUrls.length - 2 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      
      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
        <div className="product-images grid grid-cols-2 justify-center max-lg:justify-start">
          <img
            src={`https://${productData?.additionalImageUrls[currentImage]}`}
            className="w-96 text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
          <div className="flex flex-col items-center ml-3 h-full">
            <button onClick={handlePrev} className="mb-2">
              <FaChevronUp className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
            </button>

            <div className="other-product-images grid grid-cols-1 gap-y-1 gap-x-2 max-sm:grid-cols-2 max-sm:w-64" style={{ marginLeft: '10px' }}>
              {productData?.additionalImageUrls.slice(currentStartIndex, currentStartIndex + 2).map((imageObj, index) => (
              <img
                src={`https://${imageObj}`}
                key={nanoid()}
                onClick={() => setCurrentImage(currentStartIndex + index)}
                alt={productData.name}
                className="w-32 border border-gray-600 cursor-pointer"
              />
              ))}
            </div>
        <button onClick={handleNext} className="mt-2">
          <FaChevronDown className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
        </button>
      </div>
        </div>
        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
          <h2 className="text-4xl max-sm:text-2xl text-accent-content">
            {productData?.name}
          </h2>
          <SingleProductRating rating={rating} productData={productData} />
          <div>
            <p className="text-2xl text-error">${productData?.price?.current?.value}</p>
            {productData?.originalPrice && (
              <p className="text-sm line-through text-gray-500">${productData?.originalPrice?.current?.value}</p>
            )}
          </div>


          <div className="text-xl max-sm:text-lg text-accent-content">
            {parse(productData?.description)}
          </div>
          <div className="text-xl">
            {productData && productData.availableSizes && productData.availableSizes.length > 0 && (
              <SelectSize
                sizeList={productData.availableSizes}
                size={size}
                setSize={setSize}
              />
            )}
          </div>
          <div>
            <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              className="btn bg-[#BBDED6] hover:bg-[#7fead1] text-black"
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                } else {
                  toast.error(
                    "Bạn cần đăng nhập"
                  );
                }
              }}
            >
              <FaCartShopping className="text-base mr-1" />
              Thêm vào giỏ hàng
            </button>

            {product?.isInWishList ? (
              <button
                className="btn bg-[#BBDED6] hover:bg-[#7fead1] text-black"
                onClick={() => {
                  if (loginState) {
                    removeFromWishlistHandler(product);
                  } else {
                    toast.error(
                      "You must be logged in to remove products from the wishlist"
                    );
                  }
                }}
              >
                <FaHeart className="text-base mr-1" />
                Xóa khỏi yêu thích
              </button>
            ) : (
              <button
                className="btn bg-[#BBDED6] hover:bg-[#7fead1] text-black"
                onClick={() => {
                  if (loginState) {
                    addToWishlistHandler(product);
                  } else {
                    toast.error(
                      "You must be logged in to add products to the wishlist"
                    );
                  }
                }}
              >
                <FaHeart className="text-base mr-1" />
                Thêm vào yêu thích
              </button>
            )}
          </div>
          <div className="other-product-info flex flex-col gap-x-2">
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              Thương hiệu: {productData?.brandName}
            </div>
            
            <div
              className={
                productData?.isInStock
                  ? "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
                  : "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
              }
            >
              Còn hàng?: {productData?.isInStock ? "Yes" : "No"}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              SKU: {productData?.productCode}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              Loại: {productData?.category}
            </div>
            
          </div>
        </div>
      </div>

      <SingleProductReviews rating={rating} productData={productData} />
    </>
  );
};

export default SingleProduct;
