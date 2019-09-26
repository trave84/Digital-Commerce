import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

import "./App.scss";

// const SmartPhones = () => (
//   <div>
//     <h1>Smartphones</h1>
//   </div>
// );
// const Tablets = () => (
//   <div>
//     <h1>Tablets</h1>
//   </div>
// );
// const Laptops = () => (
//   <div>
//     <h1>Laptops</h1>
//   </div>
// );
// const Desktops = () => (
//   <div>
//     <h1>Desktops</h1>
//   </div>
// );
// const Accessories = () => (
//   <div>
//     <h1>Accessories</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
