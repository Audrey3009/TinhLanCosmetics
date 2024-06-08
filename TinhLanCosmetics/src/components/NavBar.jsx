import React from "react";

const NavBar = () => {

    return (
        <nav className="w-64">
      <ul className="list-none p-0">
        <li className="py-2"><a href="#" className="block text-gray-800">SẢN PHẨM BÁN CHẠY</a></li>
        <li className="py-2"><a href="#" className="block text-gray-800">SẢN PHẨM MỚI</a></li>
        <li className="py-2"><a href="#" className="block text-gray-800">SẢN PHẨM ƯU ĐÃI</a></li>
        <li className="py-2"><a href="#" className="block text-green-600 font-bold">FLASH SALE</a></li>
        <li className="py-2 relative group">
          <a href="#" className="block text-gray-800">DƯỠNG DA</a>
          <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg list-none p-0 w-48">
            {/* Thêm các mục con nếu có */}
          </ul>
        </li>
        
        <li className="py-2 relative group">
          <a href="#" className="block text-gray-800">TRANG ĐIỂM</a>
          <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg list-none p-0 w-48">
            {/* Thêm các mục con nếu có */}
          </ul>
        </li>
        <li className="py-2 relative group">
          <a href="#" className="block text-gray-800">CHĂM SÓC TÓC & CƠ THỂ</a>
          <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg list-none p-0 w-48">
            {/* Thêm các mục con nếu có */}
          </ul>
        </li>
        
      </ul>
    </nav>
    );
};

export default NavBar;
