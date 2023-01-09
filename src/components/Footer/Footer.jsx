import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            You can place an order by phone or get answers to any questions you
            are interested in. Have a question? Send us an email or use the
            feedback form.are interested in. Have a question? Send us an email
            or use the feedback form.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            You can place an order by phone or get answers to any questions you
            are interested in. Have a question? Send us an email or use the
            feedback form.are interested in. Have a question? Send us an email
            or use the feedback form.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Linig</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
