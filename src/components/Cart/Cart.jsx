import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://img.alicdn.com/imgextra/i3/92688455/O1CN01zUWToT2CKROJ2Obe5_!!0-item_pic.jpg",
      img2: "https://img5.lalafo.com/i/posters/original/ea/7f/5e/3759b03d6d7fad8b7cbe100aa1.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://img.alicdn.com/imgextra/i3/3586957598/O1CN01ZEJAlv25zvsgEZI0P_!!3586957598.jpg",
      img2: "https://img.alicdn.com/imgextra/i3/3586957598/O1CN01Au9QhL25zvseovcaz_!!0-item_pic.jpg",
      title: "coat",
      desc: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.id} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
