import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

export const FeaturedProducts = ({ type }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
          );
          setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
