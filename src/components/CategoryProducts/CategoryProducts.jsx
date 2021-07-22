import React from "react";
import { useLocation } from "react-router-dom";

const CategoryProducts = ({ products, categories }) => {
  let location = useLocation();

  products.map((product) => {
    console.log(product.categories);
  });

  return <div></div>;
};

export default CategoryProducts;
