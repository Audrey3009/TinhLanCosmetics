import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import { Hero, ProductElement, Stats } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";


export const landingLoader = async () => {
  const response = await axios(
    `http://localhost:8080/products?_page=1&_limit=8`
  );
  const data = response.data;

  return { products: data };
};

const Landing = () => {
  const { products } = useLoaderData();
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState(products);

  const showPopularProducts = () => {
    const popularProducts = products.slice(0,4);
    setSelectedProducts(popularProducts);
  }

  const showTrendingProducts = () => {
    // Lọc ra 4 sản phẩm được xem nhiều từ products
    const trendingProducts = products.slice(4, 8);
    setSelectedProducts(trendingProducts);
  };

  const showNewProducts = () => {
    // Lọc ra 8 sản phẩm mới nhất từ products
    const newProducts = products.slice(8, 16);
    setSelectedProducts(newProducts);
  };

  useEffect(() => {
    // Mặc định hiển thị sản phẩm được mua phổ biến khi component được tạo
    showPopularProducts();
  }, []);

  return (
    <main>
      <Hero/>
      <Stats/>

      <div className="selected-products">
        <h2 className="text-4xl text-center my-12 max-md:text-4xl text-accent-content bg-[#BBDED6] py-2.5">
          Sản phẩm nổi bật
        </h2>

        

        <div className="sub-section-buttons flex justify-center mb-8">
          <button className="bg-green-500 text-white py-3 px-6 mr-4 rounded" onClick={showPopularProducts}>
            Sản phẩm được mua phổ biến
          </button>
          <button className="bg-green-500 text-white py-3 px-6 rounded" onClick={showTrendingProducts}>
            Sản phẩm được xem nhiều
          </button>
        </div>
      

        <div className="selected-products-grid max-w-7xl mx-auto">
          {selectedProducts.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
              originalPrice={product.originalPrice?.current?.value}
            />
          ))}
        </div>
      </div>

      <div className="new-products mt-16">
        <h2 className="text-4xl text-center my-12 max-md:text-4xl text-accent-content bg-[#BBDED6] py-2.5">
          Sản phẩm mới
        </h2>

        <div className="new-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
              originalPrice={product.originalPrice?.current?.value}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
