import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Navbar } from "./components";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
