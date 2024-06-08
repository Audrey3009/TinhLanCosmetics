import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "Son",
    "Sữa rửa mặt",
    "Kem Dường",
    "Kem nền",
    "Nước tẩy trang",
    "Phấn",
    "Mặt nạ",
    "Dưỡng tóc",
    "Thực phẩm chức năng",
    "Dụng cụ trang điểm",
    "Chì kẻ mày",
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "all",
    "Habaria",
    "SVR",
    "Bioderma",
    "Wonjin",
    "Dearmay",
    "Loreal",
    "Black Rouge",
    "Catrice",
    "Arkopharma",
    "La Roche-Posay",
    "Cerave",
    "Espoir",
    "Lilybyred",
    "Romand",
    "Pretty Skin",
    "Vichy",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      {/* <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue=""
      /> */}
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select brand"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["asc", "desc", "price high", "price low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      {/* <FormSelect
        label="Select gender"
        name="gender"
        list={["all", "male", "female"]}
        size="select-sm"
        defaultValue="all"
      /> */}
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
      {/* <FormDatePicker label="select minimum production date" name="date" /> */}

      {/* In stock */}
      <FormCheckbox
        label="Only products in stock"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}
      <div className="col-span-full flex justify-end space-x-2">
        <button
          type="submit"
          className="btn bg-[#BBDED6] hover:bg-[#A6D1CC] text-black btn-sm"
        >
          search
        </button>
        <Link to="/shop?page=1" className="btn btn-primary btn-sm">
          reset
        </Link>
      </div>
    </Form>
  );
};

export default Filters;
