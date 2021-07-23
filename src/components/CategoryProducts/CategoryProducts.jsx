import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const CategoryProducts = () => {
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [slug, setSlug] = useState(path);

  // const fetchSlugs = async () => {
  //   const { data } = await commerce.products.list({
  //     category_slug: [slug],
  //   });
  // };

  console.log(slug);
  useEffect(() => {}, []);

  return <div></div>;
};

export default CategoryProducts;
