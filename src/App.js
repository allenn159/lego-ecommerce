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
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);

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
      setCartItems(c.line_items);
    });
  };

  const onAddToCart = async (product, quantity) => {
    await commerce.cart.add(product, quantity).then(() => {
      fetchCart();
    });
  };

  const onUpdateCart = async (product, quantity) => {
    await commerce.cart.update(product, quantity).then((c) => {
      fetchCart();
    });
  };

  const onRemoveFromCart = async (product) => {
    await commerce.cart.remove(product).then((c) => {
      fetchCart();
    });
  };

  const onEmptyCart = async () => {
    await commerce.cart.empty().then((c) => {
      fetchCart();
    });
  };

  useEffect(() => {
    fetchProducts();
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
            <Frontpage />
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
              cartItems={cartItems}
              onEmptyCart={onEmptyCart}
            />
          </Route>
          <Route>
            <Checkout />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
