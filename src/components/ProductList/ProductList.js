import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Wishlist from '../../assets/icons/heart.svg';
import Liked from '../../assets/icons/RedHeart.svg';

const ProductList = () => {
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
    <div className="relative py-[1rem] px-[5px] flex flex-col">
     
      <div>
        <div className="card-container">
          {items.length > 0 &&
            items.map((item, index) => (
              <div className="card" key={index}>
                <img
                  src={item.image}
                  alt="product"
                  className="card-products"
                />
                <h6 className="product-title">{item.title}</h6>

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
      </div>
    </div>
  );
};

export default ProductList;
