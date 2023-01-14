import React from "react";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";

export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://img.alicdn.com/imgextra/i3/92688455/O1CN01zUWToT2CKROJ2Obe5_!!0-item_pic.jpg",
      img2: "https://img5.lalafo.com/i/posters/original/ea/7f/5e/3759b03d6d7fad8b7cbe100aa1.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://img.alicdn.com/imgextra/i3/3586957598/O1CN01ZEJAlv25zvsgEZI0P_!!3586957598.jpg",
      img2: "https://img.alicdn.com/imgextra/i3/3586957598/O1CN01Au9QhL25zvseovcaz_!!0-item_pic.jpg",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://img.alicdn.com/imgextra/i2/2200788949915/O1CN01Prp7cl2N77cy35xlp_!!2200788949915.jpg",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://ae04.alicdn.com/kf/Hb750f1aad4a34fa380ea72dbbf9bbc3bx/Li-Ning.jpg",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Builds the app for production to the build folder. It correctly
          bundles React in production mode and optimizes the build for the best
          performance. The build is minified and the filenames include the
          hashes. Your app is ready to be deployed! See the section about
          deployment for more information.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
