import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.alicdn.com/imgextra/i2/92688455/O1CN01EsTVXP2CKROYiE0TG_!!0-item_pic.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://img.alicdn.com/imgextra/i3/92688455/O1CN01A6Sjjs2CKROSMLVLO_!!92688455.jpg_500x500.jpg_.webp"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://img.alicdn.com/imgextra/i1/749713134/O1CN01FMXhOh1Z1Pu0tVqLK_!!0-item_pic.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://img5.lalafo.com/i/posters/original/ea/7f/5e/3759b03d6d7fad8b7cbe100aa1.jpeg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Man
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://lining.spb.ru/thumb/2/t_b16_0qFE_E5ME7cUB2wg/1000r1000/d/1x1.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="http://desempacados.com/wp-content/uploads/2019/09/Lining-9.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
