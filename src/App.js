import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Navbar, Frontpage, CategoryProducts } from "./components";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar categories={categories} />
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route exact path="/categoryproduct/:slug">
            <CategoryProducts products={products} categories={categories} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
