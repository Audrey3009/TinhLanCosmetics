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

const Footer = () => {
  return (
    <div className="Footer" style={{marginTop: '30px'}}>
      <div className="bg-[#FAE3D9] p-6 rounded-lg shadow-md"> 
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">TINH LAN COSMETIC</h2>
          <p className="text-gray-600">Địa chỉ:</p>
          <p className="text-gray-600">Số điện thoại: 0123456789</p>
          <p className="text-gray-600">Email: ...@gmail.com</p>
          <div className="flex items-center mt-2">
            <img src="/visa-logo.png" alt="Visa Logo" className="h-6 mr-2" /> 
            <img src="/mastercard-logo.png" alt="Mastercard Logo" className="h-6 mr-2" /> 
            {/* Thêm các logo thanh toán khác tại đây */}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">HỖ TRỢ KHÁCH HÀNG</h2>
          {/* Thêm thông tin hỗ trợ khách hàng tại đây */}
        </div>
        {/* Thêm cột "GIỜ MỞ CỬA" và "THÔNG TIN" nếu cần */}
      </div>
      <div className="mt-4">
        <img src="/da-thong-bao-logo.png" alt="Đã Thông Báo Logo" className="h-12" /> 
      </div>
    </div>
    </div>

    
  );
};

export default Footer;