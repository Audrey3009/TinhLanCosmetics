// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaSquareYoutube } from "react-icons/fa6";
// import { useSelector } from "react-redux";


// const Footer = () => {
//   const loginState = useSelector((state) => state.auth.isLoggedIn);
//   return (
//     <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
//       <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
//         <Link to="/" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
//           Home
//         </Link>
//         <Link to="/shop" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
//           Shop
//         </Link>
//         <Link to="/about" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
//           About us
//         </Link>
//         <Link to="/contact" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
//           Contact
//         </Link>
//         {!loginState && (
//           <>
//             <Link
//               to="/login"
//               className="link link-hover text-2xl max-md:text-xl text-accent-content"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="link link-hover text-2xl max-md:text-xl text-accent-content"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </nav>
//       <nav>
//         <div className="grid grid-flow-col gap-4">
//           <FaSquareXTwitter className="text-6xl max-sm:text-4xl text-accent-content" />
//           <FaSquareFacebook className="text-6xl max-sm:text-4xl text-accent-content" />
//           <FaSquareInstagram className="text-6xl max-sm:text-4xl text-accent-content" />
//           <FaSquareYoutube className="text-6xl max-sm:text-4xl text-accent-content" />
//         </div>
//       </nav>
//       <aside>
//         <p className="text-2xl max-sm:text-sm text-accent-content">
//           Copyright © 2023 - All right reserved by Kuzma Clothing & Shoes
//         </p>
//       </aside>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { SiVisa, SiMastercard, SiApplepay, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="Footer" style={{marginTop: '30px'}}>
      <div className="bg-[#FAE3D9] p-6 rounded-lg shadow-md"> 
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">TINH LAN COSMETIC</h2>
          <p className="text-gray-600">Địa chỉ:</p>
            <p className="text-gray-600">Email: ...@gmail.com</p>
            <p className="text-xl font-semibold text-gray-800 mt-2">THANH TOÁN</p>
            <div className="flex items-center mt-2">
              <SiVisa className="h-8 w-8 mr-2 text-600" style={{ color: '#254AA5' }} />
              <SiMastercard className="h-8 w-8 mr-2 text-orange-500" />
              <SiApplepay className="h-8 w-8 mr-2 text-gray-800" />
              <SiPaypal className="h-8 w-8 mr-2 text-blue-800" />
            </div>
            <img src="../public/kiemchung.png" alt="Đã Thông Báo Logo" className="h-14" /> 
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">HỖ TRỢ KHÁCH HÀNG</h2>
          <p className="text-gray-600">Hotline:</p>
        </div>
        <div>
            <h2 className="text-xl font-semibold text-gray-800">GIỜ MỞ CỬA</h2>
            <p className="text-gray-600">Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).</p>
          </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">THÔNG TIN</h2>
          {/* Thêm thông tin hỗ trợ khách hàng tại đây */}
          <p className="text-gray-600">Tuyển dụng</p>
          <p className="text-gray-600">Tin tức mới</p>

        </div>  
          
      </div>
    </div>
    </div>

    
  );
};

export default Footer;