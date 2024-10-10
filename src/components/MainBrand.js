import React, { useState, useEffect } from 'react';
import './brands.css'; // Your styles are imported here
import Wishlist from '../assets/icons/heart.svg';
import Liked from '../assets/icons/RedHeart.svg';

const FilterComponent = ({ brands, sizes, handleBrandChange, handleSizeChange }) => {
  return (
    <div className="itemsFilter">
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header">FILTERS</div>
          <div className="accordion-content">
            <h6>Brands</h6>
            <div className="options">
              {brands.map((brand) => (
                <label key={brand}>
                  <input
                    type="checkbox"
                    name={brand}
                    onChange={handleBrandChange}
                  /> {brand}
                </label>
              ))}
            </div>
            <h6>Sizes</h6>
            <div className="options">
              {sizes.map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    name={size}
                    onChange={handleSizeChange}
                  /> {size}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ items, handleWishlist }) => (
  <div className="card-container">
    {items.length > 0 &&
      items.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt="product" className="card-products" />
          <h6 className="product-title">{item.title}</h6>
          {/* <div className="wishlist">
            <button onClick={() => handleWishlist(index)} className="text-red-500">
              {item.isLiked ? "❤️ Liked" : "♡ Add to Wishlist"}
            </button>
          </div> */}
          <div className="wishlist">
          <a href="/">Sign</a> or create an account to see price
                  <img
                    src={item.isLiked ? Liked : Wishlist}
                    onClick={() => handleWishlist(index)}
                    alt="wishlist"
                    className="cursor-pointer"
                  />
                </div>
        </div>
      ))}
  </div>
);

const FillterBrands = () => {
  const brands = [
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];

  const sizes = ["Small", "Medium", "Large", "Extra Large"];

  const handleBrandChange = (e) => {
    console.log(`Selected brand: ${e.target.name}, Checked: ${e.target.checked}`);
  };

  const handleSizeChange = (e) => {
    console.log(`Selected size: ${e.target.name}, Checked: ${e.target.checked}`);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const itemsWithLiked = data.map(item => ({ ...item, isLiked: false }));
        setItems(itemsWithLiked);
      } catch (error) {
        console.error("ERROR!!!", error);
      }
    };
    fetchData();
  }, []);

  const handleWishlist = (index) => {
    const newItems = [...items];
    newItems[index].isLiked = !newItems[index].isLiked;
    setItems(newItems);
  };

  return (
    <div className="home">
      <div className="homeBanner">
        {/* Left Side: Filter Section */}
        <FilterComponent 
          brands={brands} 
          sizes={sizes} 
          handleBrandChange={handleBrandChange} 
          handleSizeChange={handleSizeChange} 
        />
        
        {/* Right Side: Product List Section */}
        <ProductList items={items} handleWishlist={handleWishlist} />
      </div>
    </div> 
  );
};

export default FillterBrands;
