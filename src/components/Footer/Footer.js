import React from "react";
import "./Footer.css";
import Nationality from "../../assets/images/nationality.svg";
import Star from "../../assets/images/Star.svg";
import Instagram from "../../assets/icons/instagram.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import GooglePay from "../../assets/images/Gpay.svg";
import MasterCard from "../../assets/images/MasterCard.svg";
import Pay from "../../assets/images/PP.svg";
import Amex from "../../assets/images/Amex.svg";
import AmazonPay from "../../assets/images/AmazonPay.svg";
import OPay from "../../assets/images/OPay.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerSectionOne">
        <div className="details">
          <h5>BE THE FIRST TO KNOW</h5>
          <h6>Sign up for updates from mettā muse.</h6>
          <div className="mailSubscribe">
            <input type="email" placeholder="Enter your email" />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contactCurrency">
          {/* <div> */}
          <h5>CONTACT US</h5>
          <h6>+44 2267 776</h6>
          <h6>customercare@metamuse.com</h6>
          {/* </div> */}
          <div>
            <h5>CURRENCY</h5>
            <div className="avatar">
              <img src={Nationality} alt="nationality" />
              <img src={Star} alt="Star" />
              <span>USD</span>
            </div>
            <h6>
              <span className="currency">
                Transactions will be completed in Euros and a currency reference
                is available on hover.{" "}
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="footerSectionTwo">
        <div className="Sparkel&Sparkel & Shine">
          <h4>Sparkel & Shine</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <div className="quickLinks">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
            </ul>
          </div>
          <div>
            <h4>FAQs</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="socialMediaPayment">
          <div className="socialMedia">
            <h4>FOLLOW US</h4>
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
          <div className="payment">
            <h4>Sparkel & Shine ACCEPTS</h4>
            <div className="paymentOptions">
              <img src={GooglePay} alt="Google Pay" />
              <img src={MasterCard} alt="MasterCard" />
              <img src={Pay} alt="PP" />
              <img src={Amex} alt="Amex" />
              <img src={AmazonPay} alt="Amazon Pay" />
              <img src={OPay} alt="OPay" />
            </div>
          </div>
        </div>
      </div>
      <h6>Copyright © 2024 Sparkel & Shine. All rights reserved.</h6>
    </div>
  );
};

export default Footer;
