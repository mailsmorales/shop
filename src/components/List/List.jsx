import React from "react";
import "./List.scss";
import { Card } from "../Card/Card.jsx";

export const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
