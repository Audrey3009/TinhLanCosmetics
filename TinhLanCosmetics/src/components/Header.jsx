import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaHeart, FaWindowClose, FaBars, FaStore } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearWishlist, updateWishlist } from "../features/wishlist/wishlistSlice";

const Header = () => {
  const { amount, total } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(loginState);
  const dispatch = useDispatch();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  const fetchWishlist = async () => {
    if (loginState) {
      try {
        const getResponse = await axios.get(`http://localhost:8080/user/${localStorage.getItem("id")}`);
        const userObj = getResponse.data;
        dispatch(updateWishlist({ userObj }));
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(clearWishlist());
    }
  };

  useEffect(() => {
    setIsLoggedIn(loginState);
    fetchWishlist();
  }, [loginState]);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <div className="topbar border-0 border-gray-800">
        <ul>
          {!isLoggedIn && (
            <>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/login">
                  <button>Đăng nhập</button>
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/register">
                  <button>Đăng kí</button>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-black text-accent-content">
            <img src="../public/logo-big.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/search" className="btn btn-ghost btn-circle text-accent-content">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link to="/wishlist" className="btn btn-ghost btn-circle text-accent-content">
            <FaHeart className="text-xl" />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg text-accent-content">{amount} Items</span>
                <span className="text-info text-accent-content">Subtotal: ${total.toFixed(2)}</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn bg-blue-600 btn-block text-white hover:bg-blue-500 text-base-content">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {isLoggedIn && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="User Avatar" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/user-profile" className="justify-between text-accent-content">Profile</Link>
                </li>
                <li>
                  <Link to="/order-history" className="text-accent-content">Order history</Link>
                </li>
                <li>
                  <Link to="/login" className="text-accent-content">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-bottom-menu border-y border-gray-800">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn drawer-button">
              <HiMiniBars3BottomLeft className="text-4xl" />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
              <label htmlFor="my-drawer" className="btn drawer-button">
                <FaWindowClose className="text-2xl ml-auto" />
              </label>
              <li className="text-sm">
                <NavLink className="text-accent-content" to="/">Home</NavLink>
              </li>
              <li className="text-sm">
                <NavLink className="text-accent-content" to="/shop">Sản phẩm</NavLink>
              </li>
              <li className="text-sm">
                <NavLink className="text-accent-content" to="/about-us">Tra cứu đơn hàng</NavLink>
              </li>
              <li className="text-sm">
                <NavLink className="text-accent-content" to="/contact">
                <FaStore/>
                Hệ thống cửa hàng</NavLink>
              </li>
              <li className="text-sm">
                <NavLink className="text-accent-content menu-item" to="/products">
                  <FaBars />
                  Danh mục
                </NavLink>
                <ul className="menu p-2">
                  <li><NavLink to="/category1">Category 1</NavLink></li>
                  <li><NavLink to="/category2">Category 2</NavLink></li>
                  <li><NavLink to="/category3">Category 3</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="container text-sm navlinks-container">
        <div className="menu-item text-accent-content flex items-center relative">
          <button onClick={toggleSubMenu} className="flex items-center">
            <FaBars className="icon mr-2" />
            Danh mục sản phẩm
          </button>
          <ul className={`menu p-2 ${isSubMenuOpen ? 'open' : ''}`}>
            <li><NavLink to="/category1">Category 1</NavLink></li>
            <li><NavLink to="/category2">Category 2</NavLink></li>
            <li><NavLink to="/category3">Category 3</NavLink></li>
          </ul>
        </div>
          <NavLink className="text-accent-content" to="/">Home</NavLink>
          <NavLink className="text-accent-content" to="/shop">Sản phẩm</NavLink>
          <NavLink className="text-accent-content flex items-center" to="/about-us">
          <TbTruckDelivery/>Tra cứu đơn hàng</NavLink>
          <NavLink className="text-accent-content flex items-center" to="/contact">
          <FaStore className="icon mr-2"/> Hệ thống cửa hàng</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
