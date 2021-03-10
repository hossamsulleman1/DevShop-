import React, { useState, useEffect, Suspense, lazy } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import Market from "./components/Market/Market";
import JoinUS from "./components/JoinUS/JoinUS";
import Fonts from "./components/Css/Fonts.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SemContext } from "./SemContext";
import LoginSign from "./components/Auth/LoginSign";
import FirebaseAuth from "./components/Auth/FirebaseAuth";
import Item from "./components/Item/Item";
import LandingKing from "./components/Landing/Body/LandingKing";

const Profile = lazy(() => import("./components/Profile/Profile"));

const App = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [darkState, setDarkState] = useContext(SemContext);

  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<CircularProgress />}>
        <Router>
          <div style={{ display: "flex" }}>
            <CssBaseline />
            <Navbar
              totalItems={cart.total_items}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Switch>
              <Route exact path="/Shop">
                <Products
                  products={products}
                  onAddToCart={handleAddToCart}
                  handleUpdateCartQty
                />
              </Route>
              <Route exact path="/cart">
                <Cart
                  cart={cart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onRemoveFromCart={handleRemoveFromCart}
                  onEmptyCart={handleEmptyCart}
                />
              </Route>
              <Route path="/checkout" exact>
                <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                />
              </Route>
              <Route path="/Market" exact>
                <Market />
              </Route>

              <Route path="/Welcome" exact>
                <LoginSign />
              </Route>

              <Route path="/Profile" exact>
                <Profile />
              </Route>

              <Route path="/JoinUS" exact>
                <JoinUS />
              </Route>

              <Route path="/" exact>
                <LandingKing />
              </Route>

              <Route path="/auth" exact>
                <FirebaseAuth />
              </Route>

              <Route path="/item" exact>
                <Item />
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
