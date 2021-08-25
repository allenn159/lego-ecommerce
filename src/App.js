import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
  Navbar,
  Frontpage,
  CategoryProducts,
  ProductPage,
  Cart,
  Checkout,
} from "./components";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data.reverse());
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const onAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const onUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const onRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const onEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchCategories();
    fetchCart();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar
          totalItems={cart.total_items}
          categories={categories}
          gutterbottom
        />
        <Switch>
          <Route exact path="/">
            <Frontpage categories={categories} />
          </Route>
          <Route exact path="/categoryproduct/:slug">
            <CategoryProducts />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage onAddToCart={onAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              onRemoveFromCart={onRemoveFromCart}
              onUpdateCart={onUpdateCart}
              cart={cart}
              onEmptyCart={onEmptyCart}
            />
          </Route>
          <Route>
            {cart.id && (
              <Checkout
                cart={cart.id}
                cartProducts={cart}
                onEmptyCart={onEmptyCart}
              />
            )}
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
