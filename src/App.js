import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Navbar, Frontpage, CategoryProducts, ProductPage } from "./components";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data.reverse());
  };

  const fetchCart = async () => {
    await commerce.cart.retrieve().then((c) => {
      setCart(c);
      console.log(c);
    });
  };

  const onAddToCart = async (product, quantity) => {
    await commerce.cart.add(product, quantity).then((c) => {
      setCart(c);
    });
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);

  useEffect(() => {
    fetchCart();
  }, [cart]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar cart={cart} categories={categories} gutterbottom />
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route exact path="/categoryproduct/:slug">
            <CategoryProducts />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage onAddToCart={onAddToCart} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
