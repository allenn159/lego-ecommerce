import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Navbar } from "./components";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data.reverse());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar categories={categories} />
    </ThemeProvider>
  );
};

export default App;
