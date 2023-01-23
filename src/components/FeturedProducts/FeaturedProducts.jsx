import React from "react";
import { Card } from "../Card/Card";
import "./FeaturedProducts.scss";
import { useFetch } from "../../hooks/useFetch";

export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};
