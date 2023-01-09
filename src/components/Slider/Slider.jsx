import React, { useState } from "react";
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://imboldn.com/wp-content/uploads/2021/08/Li-Ning-x-Dwyane-Wade-Way-of-Wade-9-Infinity-Balance-main.jpg",
    "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/b/AmazonStores/ATVPDKIKX0DER/626dad79bfeea89f2c138dce909322b1.w3000.h1500._CR0%2C0%2C3000%2C1500_SX1500_.jpg",
    "https://m.kickz4u.ru/userfiles/Novosti2019_5/9FE12441-5DC3-4466-87EE-209B7B5808FC-1536x1024.jpeg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
