import React, { useEffect } from "react";
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

  // const [sortType, setSortType] = useState("popular"); // Default sort type

  // const handleSortChange = (newSortType) => {
  //   setSortType(newSortType);
  // };

  // const sortedProducts =
  //   sortType === "popular"
  //     ? products.sort((a, b) => b.sold - a.sold)
  //     : products.sort((a, b) => b.views - a.views);

  return (
    <main>
      <Hero />
      <Stats />

      <div className="selected-products">
        <h2 className="text-4xl text-center my-12 max-md:text-4xl text-accent-content bg-[#BBDED6] py-2.5">
          Trending Products
        </h2>

        {/* <div className="sub-section-buttons flex justify-center mb-8">
          <button
            className={`bg-green-500 text-white py-3 px-6 mr-4 rounded ${
              sortType === "popular" ? "bg-white text-black" : ""
            }`}
            onClick={() => handleSortChange("popular")}
          >
            Sản phẩm được mua phổ biến
          </button>
          <button
            className={`bg-green-500 text-white py-3 px-6 rounded ${
              sortType === "views" ? "bg-white text-black" : ""
            }`}
            onClick={() => handleSortChange("views")}
          >
            Sản phẩm được xem nhiều
          </button>
        </div> */}

        <div className="sub-section-buttons flex justify-center mb-8">
          <button className="bg-green-500 text-white py-3 px-6 mr-4 rounded">
            Sản phẩm được mua phổ biến
          </button>
          <button className="bg-green-500 text-white py-3 px-6 rounded">
            Sản phẩm được xem nhiều
          </button>
        </div>
      

        <div className="selected-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
