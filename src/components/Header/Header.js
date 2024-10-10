import React from 'react';
import './Header.css';
import SparkelShineLogo from "../../assets/icons/app-logo.svg";
import SearchIcon from "../../assets/icons/search-normal.svg";
import WishList from "../../assets/icons/heart.svg";
import Cart from "../../assets/icons/shopping-bag.svg";
import Profile from "../../assets/icons/profile.svg";
import hamburger from "../../assets/icons/hamburger.svg";

const icons = [SearchIcon, WishList, Cart, Profile];
const altTexts = ['Search', 'Wishlist', 'Shopping cart', 'User profile'];

const Header = () => {
  return (
    <div className="header-container">
     <div className='navbar'>
     <img src={hamburger} alt='Sparkel & Shine logo' className="hamburger" />
     <img src={SparkelShineLogo} alt='Sparkel & Shine logo' className="logo-img" />
      <h2 className="title">LOGO</h2>
      <div className="icon-container">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={altTexts[index]} className="icon-img" />
        ))}
        <select className="language-select">
          <option>ENG</option>
          <option>LANG 1</option>
          <option>LANG 2</option>
          <option>LANG 3</option>
        </select>
      </div>
     </div>
      <div className="bottom-header">
        <ul className="menu-items">
          <li className="menu-item">SHOP</li>
          <li className="menu-item">SKILLS</li>
          <li className="menu-item">STORIES</li>
          <li className="menu-item">ABOUT</li>
          <li className="menu-item">CONTACT</li>
        </ul>
      </div>
      <div className="description">
        <hr />
        <h1>DISCOVER OUR PRODUCT</h1>
        <p>
        Lorem Ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <hr/>

      </div>
    </div>
  );
}

export default Header;
