import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import FillterBrands from "./MainBrand";

const Brands = () => {
  const [items, setItems] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false); 

  const handleFilterClick = () => {
    setIsFilterVisible((prevVisible) => !prevVisible); 
  };

  return (
    <div className="relative py-[1rem] px-[5px] flex flex-col">
      <div className="homeBanner">
        <div className="itemsFilter">
          <h4 className="length">20 items</h4>
          <span className="Show" onClick={handleFilterClick} style={{ cursor: "pointer" }}>
            {isFilterVisible ? "Hide Filter" : "Show Filter"} 
          </span>
        </div>

        <select className="list-items">
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE : HIGH TO LOW</option>
          <option>PRICE : LOW TO HIGH</option>
        </select>
      </div>
      <hr />
      
      {isFilterVisible ? (
        <FillterBrands /> 
      ) : (
        <ProductList /> 
      )}
    </div>
  );
};

export default Brands;
